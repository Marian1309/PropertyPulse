import connectDB from '@/lib/database';

import { Property } from '@/models';

export const GET = async () => {
  try {
    await connectDB();

    const properties = await Property.find();

    return new Response(JSON.stringify(properties), {
      status: 200
    });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Something Went Wrong', { status: 500 });
  }
};
