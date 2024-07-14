import type { Dispatch, FC, SetStateAction } from 'react';

import Link from 'next/link';

import { signOut } from 'next-auth/react';

type Props = {
  setIsProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const ProfileDropdown: FC<Props> = ({ setIsProfileMenuOpen }) => {
  const handleSignOut = () => {
    setIsProfileMenuOpen(false);
    signOut();
  };

  return (
    <div
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      tabIndex={-1}
    >
      <Link
        className="block px-4 py-2 text-sm text-gray-700"
        href="/"
        tabIndex={-1}
      >
        Your Profile
      </Link>

      <Link
        className="block px-4 py-2 text-sm text-gray-700"
        href="/"
        tabIndex={-1}
      >
        Saved Properties
      </Link>

      <button
        className="block px-4 py-2 text-sm text-gray-700"
        onClick={handleSignOut}
        tabIndex={-1}
      >
        Sign Out
      </button>
    </div>
  );
};

export default ProfileDropdown;
