import { Message } from '@/models';

import { getSessionUser } from '@/lib/auth';
import connectDB from '@/lib/database';

export const dynamic = 'force-dynamic';

// GET /api/messages/unread-count
export const GET = async () => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response('User id is required', { status: 401 });
    }

    const { userId } = sessionUser;

    const count = await Message.countDocuments({
      recipient: userId,
      read: false
    });

    return new Response(JSON.stringify({ count }), {
      status: 200
    });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Something Went Wrong', { status: 500 });
  }
};
