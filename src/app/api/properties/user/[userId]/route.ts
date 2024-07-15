import type { NextRequest } from 'next/server';

import { Property } from '@/models';

import connectDB from '@/lib/database';

export const GET = async (
  request: NextRequest,
  { params }: { params: { userId: number } }
) => {
  try {
    await connectDB();

    const userId = params.userId;

    if (!userId) {
      return new Response('User id is required', { status: 400 });
    }

    const properties = await Property.find({ owner: userId });

    return new Response(JSON.stringify(properties || []), {
      status: 200
    });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Something Went Wrong', { status: 500 });
  }
};
