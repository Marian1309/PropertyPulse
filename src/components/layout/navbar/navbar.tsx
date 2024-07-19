'use client';

import type { FC } from 'react';

import { usePathname } from 'next/navigation';

import { ClientSafeProvider, useSession } from 'next-auth/react';

import type { Pathname } from '@/types';

import { useMenu, useProviders } from '@/hooks';

import { GoogleButton } from '@/components/ui';

import MainMenu from './main-menu';
import Messages from './messages';
import MobileMenu from './mobile-menu';
import MobileDropdownMenu from './mofile-dropdown-menu';
import Profile from './profile';

const Navbar: FC = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const providers = useProviders();
  const { mobile, profile } = useMenu();

  const profileImage = session?.user?.image;

  return (
    <nav className="border-b border-blue-500 bg-blue-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <MobileMenu toggleIsMobileMenuOpen={mobile.toggle} />

          <MainMenu
            isLoggedIn={session}
            pathname={pathname as Pathname}
            setIsMobileMenuOpen={mobile.setIsMobileMenuOpen}
          />

          {!session &&
            providers &&
            Object.values(providers).map(
              (provider: ClientSafeProvider, index) => (
                <GoogleButton key={index} provider={provider} />
              )
            )}

          {session && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <Messages />

              <Profile
                isProfileMenuOpen={profile.isOpen}
                profileImage={profileImage}
                setIsProfileMenuOpen={profile.setIsProfileMenuOpen}
                toggleIsProfileMenuOpen={profile.toggle}
              />
            </div>
          )}
        </div>
      </div>

      {mobile.isOpen && (
        <MobileDropdownMenu
          isLoggedIn={session}
          pathname={pathname as Pathname}
          setIsMobileMenuOpen={mobile.setIsMobileMenuOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;
