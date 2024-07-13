import type { FC } from 'react';

import Link from 'next/link';

import type { Session } from 'next-auth';

import type { Pathname } from '@/types';

import { LINKS } from '@/constants';

import { cn } from '@/lib/utils';

type Props = {
  pathname: Pathname;
  isLoggedIn: Session | null;
};

const LinkList: FC<Props> = ({ pathname, isLoggedIn }) => {
  return (
    <>
      {LINKS.filter((link) => {
        if (!isLoggedIn && link.pathname === '/properties/add') {
          return null;
        }

        return link;
      }).map((link) => (
        <Link
          className={cn(
            'block rounded-md px-3 py-2 text-white hover:bg-gray-900 hover:text-white',
            pathname === link.pathname ? 'bg-black' : ''
          )}
          href={link.pathname}
          key={link.id}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default LinkList;
