import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type Return = {
  mobile: {
    isOpen: boolean;
    toggle: () => void;
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  };
  profile: {
    isOpen: boolean;
    toggle: () => void;
    setIsProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
  };
};

const useMenu = (): Return => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);

  const toggleIsMobileMenuOpen = () => setIsMobileMenuOpen((prev) => !prev);

  const toggleIsProfileMenuOpen = () => setIsProfileMenuOpen((prev) => !prev);

  return {
    mobile: {
      isOpen: isMobileMenuOpen,
      toggle: toggleIsMobileMenuOpen,
      setIsMobileMenuOpen
    },
    profile: {
      isOpen: isProfileMenuOpen,
      toggle: toggleIsProfileMenuOpen,
      setIsProfileMenuOpen
    }
  };
};

export default useMenu;
