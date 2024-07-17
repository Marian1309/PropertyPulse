import { User } from '@/models';

import { getSessionUser } from '@/lib/auth';
import connectDB from '@/lib/database';

export const dynamic = 'force-dynamic';

// POST /api/bookmarks/check
export const POST = async (request: Request) => {
  try {
    await connectDB();

    const { propertyId } = await request.json();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response('User id is required', { status: 401 });
    }

    const { userId } = sessionUser;

    const user = await User.findOne({ _id: userId });

    const isBookMarked = user.bookmarks.includes(propertyId);

    await user.save();

    return new Response(JSON.stringify({ isBookMarked }), {
      status: 200
    });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Somethig went wrong', { status: 500 });
  }
};
