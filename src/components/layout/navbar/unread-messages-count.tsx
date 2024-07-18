'use client';

import type { FC } from 'react';

import { useGlobalContext } from '@/hooks';

const UnreadMessagesCount: FC = () => {
  const context = useGlobalContext();

  const unreadCount = context?.unreadCount;

  return (
    <>
      {unreadCount !== 0 && (
        <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-white">
          {unreadCount}
        </span>
      )}
    </>
  );
};

export default UnreadMessagesCount;
