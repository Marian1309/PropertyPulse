import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { logo } from '@/assets/images';

const MainMenu: FC = () => {
  return (
    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
      <Link className="flex flex-shrink-0 items-center" href="/">
        <Image
          alt="PropertyPulse"
          className="h-10 w-auto"
          height={100}
          priority
          src={logo.src}
          width={100}
        />

        <span className="ml-2 hidden text-2xl font-bold text-white md:block">
          PropertyPulse
        </span>
      </Link>

      <div className="hidden md:ml-6 md:block">
        <div className="flex space-x-2">
          <Link
            className="rounded-md bg-black px-3 py-2 text-white hover:bg-gray-900 hover:text-white"
            href="/"
          >
            Home
          </Link>

          <Link
            className="rounded-md px-3 py-2 text-white hover:bg-gray-900 hover:text-white"
            href="/properties"
          >
            Properties
          </Link>

          <Link
            className="text-nowrap rounded-md px-3 py-2 text-white hover:bg-gray-900 hover:text-white"
            href="/properties/add"
          >
            Add Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
