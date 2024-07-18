import type { FC } from 'react';

import Link from 'next/link';

import ICONS from '@/components/icons';

import UnreadMessagesCount from './unread-messages-count';

const Messages: FC = () => {
  return (
    <Link className="group relative" href="/messages">
      <button
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        type="button"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View notifications</span>

        <ICONS.bell />
      </button>

      <UnreadMessagesCount />
    </Link>
  );
};

export default Messages;
