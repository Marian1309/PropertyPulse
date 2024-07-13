'use client';

import { type FC, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import type { BuiltInProviderType } from 'next-auth/providers/index';
import type { ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { getProviders, useSession } from 'next-auth/react';

import type { Pathname } from '@/types';

import { GoogleButton } from '@/components/ui';

import MainMenu from './main-menu';
import Messages from './messages';
import MobileMenu from './mobile-menu';
import MobileDropdownMenu from './mofile-dropdown-menu';
import Profile from './profile';

const Navbar: FC = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  const [providers, setProiders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>();

  useEffect(() => {
    const setAuthProviders = async () => {
      const providers = await getProviders();
      setProiders(providers);
    };

    setAuthProviders();
  }, []);

  const profileImage = session?.user?.image;

  const toggleIsMobileMenuOpen = () => setIsMobileMenuOpen((prev) => !prev);

  const toggleIsProfileMenuOpen = () => setIsProfileMenuOpen((prev) => !prev);

  return (
    <nav className="border-b border-blue-500 bg-blue-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <MobileMenu toggleIsMobileMenuOpen={toggleIsMobileMenuOpen} />

          <MainMenu isLoggedIn={session} pathname={pathname as Pathname} />

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
                isProfileMenuOpen={isProfileMenuOpen}
                profileImage={profileImage}
                setIsProfileMenuOpen={setIsProfileMenuOpen}
                toggleIsProfileMenuOpen={toggleIsProfileMenuOpen}
              />
            </div>
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <MobileDropdownMenu
          isLoggedIn={session}
          pathname={pathname as Pathname}
        />
      )}
    </nav>
  );
};

export default Navbar;
