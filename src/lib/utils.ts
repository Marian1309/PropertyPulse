import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import type { User } from 'next-auth';
import { getServerSession } from 'next-auth';
import { twMerge } from 'tailwind-merge';

import authOptions from './auth-options';

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

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
