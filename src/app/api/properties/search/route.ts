import { Property } from '@/models';

import connectDB from '@/lib/database';

// GET /api/properties/search
export const GET = async (request: Request) => {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const location = searchParams.get('location');
    const propertyType = searchParams.get('propertyType');

    const locationPattern = new RegExp(location!, 'i');

    const query = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { 'location.strret': locationPattern },
        { 'location.city': locationPattern },
        { 'location.state': locationPattern },
        { 'location.zipcode': locationPattern }
      ]
    };

    if (propertyType && propertyType !== 'All') {
      const typePattern = new RegExp(propertyType, 'i');

      // @ts-ignore
      query.type = typePattern;
    }

    const properties = await Property.find(query);

    return new Response(JSON.stringify(properties), {
      status: 200
    });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Something went wrong', { status: 500 });
  }
};
