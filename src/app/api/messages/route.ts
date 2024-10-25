import { Message } from '@/models';

import { getSessionUser } from '@/lib/auth';
import connectDB from '@/lib/database';

export const dynamic = 'force-dynamic';

// GET /api/messages
export const GET = async () => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response('User id is required', { status: 401 });
    }

    const { userId } = sessionUser;

    const readMessages = await Message.find({ recipient: userId, read: true })
      .sort({ createdAt: -1 })
      .populate('sender', 'name')
      .populate('property', 'name');

    const unreadMessages = await Message.find({
      recipient: userId,
      read: false
    })
      .sort({ createdAt: -1 })
      .populate('sender', 'userName')
      .populate('property', 'name');

    const messages = [...unreadMessages, ...readMessages];

    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Something Went Wrong', { status: 500 });
  }
};

// POST /api/messages
export const POST = async (request: Request) => {
  try {
    await connectDB();

    const { name, email, phone, message, property, recipient } =
      await request.json();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response('User id is required', { status: 401 });
    }

    const { user } = sessionUser;

    if (user.id === recipient) {
      return new Response(
        JSON.stringify({ message: 'Can not send a message to yourself' }),
        { status: 400 }
      );
    }

    const newMessage = new Message({
      sender: user.id,
      recipient,
      property,
      name,
      email,
      phone,
      body: message
    });

    await newMessage.save();

    return new Response(JSON.stringify({ message: 'Message Sent' }), {
      status: 200
    });
  } catch (err: unknown) {
    console.log(err);
    return new Response('Something Went Wrong', { status: 500 });
  }
};
