import type { Dispatch, FC, SetStateAction } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import type { Session } from 'next-auth';

import type { Pathname } from '@/types';

import { logo } from '@/assets/images';

import LinkList from './link-list';

type Props = {
  pathname: Pathname;
  isLoggedIn: Session | null;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MainMenu: FC<Props> = ({ pathname, isLoggedIn, setIsMobileMenuOpen }) => {
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
          <LinkList
            isLoggedIn={isLoggedIn}
            pathname={pathname}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
