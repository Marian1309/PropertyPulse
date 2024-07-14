import type { User } from 'next-auth';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/config';

export const getSessionUser = async (): Promise<{
  user: User;
  userId: string;
} | null> => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return null;
    }

    return {
      user: session.user,
      userId: session.user.id
    };
  } catch (err: unknown) {
    console.log(err);
    return null;
  }
};
