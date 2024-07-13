import type { Dispatch, FC, SetStateAction } from 'react';

import Image from 'next/image';

import { profile } from '@/assets/images';

import ProfileDropdown from './profile-dropdown';

type Props = {
  isProfileMenuOpen: boolean;
  toggleIsProfileMenuOpen: () => void;
  profileImage: string | null | undefined;
  setIsProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Profile: FC<Props> = ({
  isProfileMenuOpen,
  toggleIsProfileMenuOpen,
  profileImage,
  setIsProfileMenuOpen
}) => {
  return (
    <div className="relative ml-3">
      <div>
        <button
          className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          onClick={toggleIsProfileMenuOpen}
          type="button"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>

          <Image
            alt=""
            className="h-8 w-8 rounded-full"
            height={100}
            priority
            src={profileImage ?? profile.src}
            width={100}
          />
        </button>
      </div>

      {isProfileMenuOpen && (
        <ProfileDropdown setIsProfileMenuOpen={setIsProfileMenuOpen} />
      )}
    </div>
  );
};

export default Profile;
