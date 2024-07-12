'use client';

import { type FC, useState } from 'react';

import { GoogleButton } from '../ui';

import MainMenu from './main-menu';
import Messages from './messages';
import MobileMenu from './mobile-menu';
import MobileDropdownMenu from './mofile-dropdown-menu';
import Profile from './profile';

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);

  const toggleIsMobileMenuOpen = () => setIsMobileMenuOpen((prev) => !prev);

  const toggleIsProfileMenuOpen = () => setIsProfileMenuOpen((prev) => !prev);

  return (
    <nav className="border-b border-blue-500 bg-blue-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <MobileMenu toggleIsMobileMenuOpen={toggleIsMobileMenuOpen} />

          <MainMenu />

          <div className="hidden md:ml-6 md:block">
            <GoogleButton />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <Messages />

            <Profile
              isProfileMenuOpen={isProfileMenuOpen}
              toggleIsProfileMenuOpen={toggleIsProfileMenuOpen}
            />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && <MobileDropdownMenu />}
    </nav>
  );
};

export default Navbar;