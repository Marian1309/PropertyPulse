import { Property, User } from '@/models';

import { getSessionUser } from '@/lib/auth';
import connectDB from '@/lib/database';

export const dynamic = 'force-dynamic';

// GET /api/bookmarks
export const GET = async () => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response('User id is required', { status: 401 });
    }

    const { userId } = sessionUser;

    const user = await User.findOne({ _id: userId });

    const bookmarks = await Property.find({ _id: { $in: user.bookmarks } });

    return new Response(JSON.stringify(bookmarks), { status: 200 });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Something went wrong', { status: 500 });
  }
};

// POST  /api/bookmarks
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

    let isBookMarked = user.bookmarks.includes(propertyId);

    let message;

    if (isBookMarked) {
      user.bookmarks.pull(propertyId);
      message = 'Bookmark removed successfully';
      isBookMarked = false;
    } else {
      user.bookmarks.push(propertyId);
      message = 'Bookmark added successfully';
      isBookMarked = true;
    }

    await user.save();

    return new Response(JSON.stringify({ message, isBookMarked }), {
      status: 200
    });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Something went wrong', { status: 500 });
  }
};
