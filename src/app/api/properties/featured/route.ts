import { Property } from '@/models';

import connectDB from '@/lib/database';

// GET /api/properties/featured
export const GET = async () => {
  try {
    await connectDB();

    const properties = await Property.find({
      is_featured: true
    });

    return new Response(JSON.stringify(properties), {
      status: 200
    });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Something Went Wrong', { status: 500 });
  }
};
