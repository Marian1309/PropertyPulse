import type { FC } from 'react';

import Link from 'next/link';

import ICONS from '@/components/icons';

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

      <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-white">
        3
      </span>
    </Link>
  );
};

export default Messages;
