import type { NextRequest } from 'next/server';

import connectDB from '@/lib/database';

import { Property } from '@/models';

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response('Property Not Found', { status: 404 });
    }

    return new Response(JSON.stringify(property), {
      status: 200
    });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Something Went Wrong', { status: 500 });
  }
};
