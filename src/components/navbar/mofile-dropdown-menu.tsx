import type { FC } from 'react';

import Link from 'next/link';

import { GoogleButton } from '../ui';

const MobileDropdownMenu: FC = () => {
  return (
    <div className="space-y-1 px-2 pb-3 pt-2">
      <Link
        className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
        href="/"
      >
        Home
      </Link>

      <Link
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        href="/properties"
      >
        Properties
      </Link>

      <Link
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        href="/properties/add"
      >
        Add Property
      </Link>

      <GoogleButton />
    </div>
  );
};

export default MobileDropdownMenu;
