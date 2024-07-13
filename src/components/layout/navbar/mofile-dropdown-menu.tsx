import type { FC } from 'react';

import type { Session } from 'next-auth';

import type { Pathname } from '@/types';

import { GoogleButton } from '@/components/ui';

import LinkList from './link-list';

type Props = {
  pathname: Pathname;
  isLoggedIn: Session | null;
};

const MobileDropdownMenu: FC<Props> = ({ pathname, isLoggedIn }) => {
  return (
    <div className="space-y-1 px-2 pb-3 pt-2">
      <LinkList isLoggedIn={isLoggedIn} pathname={pathname} />

      {!isLoggedIn && <GoogleButton />}
    </div>
  );
};

export default MobileDropdownMenu;
