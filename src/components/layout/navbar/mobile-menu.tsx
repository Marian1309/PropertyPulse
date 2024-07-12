import type { FC } from 'react';

import ICONS from '@/components/icons';

type Props = {
  toggleIsMobileMenuOpen: () => void;
};

const MobileMenu: FC<Props> = ({ toggleIsMobileMenuOpen }) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
      <button
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        id="mobile-dropdown-button"
        onClick={toggleIsMobileMenuOpen}
        type="button"
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>

        <ICONS.mobileMenu />
      </button>
    </div>
  );
};

export default MobileMenu;
