import type { NextRequest } from 'next/server';

import env from '@/env';

import { cloudinary } from '@/config';

import { Property } from '@/models';

import { getSessionUser } from '@/lib/auth';
import connectDB from '@/lib/database';

// GET /api/properties
export const GET = async (request: NextRequest) => {
  try {
    await connectDB();

    const page = Number(request.nextUrl.searchParams.get('page')) || 1;
    const pageSize = Number(request.nextUrl.searchParams.get('pageSize')) || 3;

    const skip = (page - 1) * pageSize;

    const total = await Property.countDocuments({});
    const properties = await Property.find({}).skip(skip).limit(pageSize);

    const result = {
      total,
      properties
    };

    return new Response(JSON.stringify(result), {
      status: 200
    });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Something Went Wrong', { status: 500 });
  }
};

// POST /api/properties
export const POST = async (request: NextRequest) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response('User id is required', { status: 401 });
    }

    const { userId } = sessionUser;

    const formData = await request.formData();

    const rates = {
      weekly: formData.get('rates.weekly'),
      monthly: formData.get('rates.monthly'),
      nightly: formData.get('rates.nightly')
    };

    if (!rates.monthly && !rates.nightly && !rates.weekly) {
      return new Response('Write down at least one rate price', {
        status: 401
      });
    }

    const amenities = formData.getAll('amenities');
    const images = formData.getAll('images') as any[];

    const exisingImages = images.filter((image) => image.name !== '');

    const propertyData = {
      type: formData.get('type'),
      name: formData.get('name'),
      description: formData.get('description'),
      location: {
        street: formData.get('location.street'),
        city: formData.get('location.city'),
        state: formData.get('location.state'),
        zipcode: formData.get('location.zipcode')
      },
      beds: formData.get('beds'),
      baths: formData.get('baths'),
      square_feet: formData.get('square_feet'),
      amenities,
      rates,
      seller_info: {
        name: formData.get('seller_info.name'),
        email: formData.get('seller_info.email'),
        phone: formData.get('seller_info.phone')
      },
      owner: userId,
      images: exisingImages
    };

    const imageUploadPromises = [];

    for (const image of images) {
      const imageBuffer = await image.arrayBuffer();
      const imageArr = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArr);

      const imageBase64 = imageData.toString('base64');

      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        { folder: 'property-pulse' }
      );

      imageUploadPromises.push(result.secure_url);

      const uploadedImages = await Promise.all(imageUploadPromises);
      propertyData.images = uploadedImages;
    }

    const newProperty = new Property(propertyData);
    await newProperty.save();

    return Response.redirect(
      `${env.server.NEXTAUTH_URL}/properties/${newProperty._id}?new=true`
    );
  } catch (err: unknown) {
    console.log(err);
    return new Response('Failed to add property', { status: 500 });
  }
};
