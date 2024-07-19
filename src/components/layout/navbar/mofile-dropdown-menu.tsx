import type { Dispatch, FC, SetStateAction } from 'react';

import type { Session } from 'next-auth';

import type { Pathname } from '@/types';

import { GoogleButton } from '@/components/ui';

import LinkList from './link-list';

type Props = {
  pathname: Pathname;
  isLoggedIn: Session | null;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileDropdownMenu: FC<Props> = ({
  pathname,
  isLoggedIn,
  setIsMobileMenuOpen
}) => {
  return (
    <div className="space-y-1 px-2 pb-3 pt-2">
      <LinkList
        isLoggedIn={isLoggedIn}
        pathname={pathname}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {!isLoggedIn && <GoogleButton />}
    </div>
  );
};

export default MobileDropdownMenu;
