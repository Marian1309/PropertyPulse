import { useState } from 'react';

const useMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);

  const toggleIsMobileMenuOpen = () => setIsMobileMenuOpen((prev) => !prev);

  const toggleIsProfileMenuOpen = () => setIsProfileMenuOpen((prev) => !prev);

  return {
    mobile: { isOpen: isMobileMenuOpen, toggle: toggleIsMobileMenuOpen },
    profile: {
      isOpen: isProfileMenuOpen,
      toggle: toggleIsProfileMenuOpen,
      setIsProfileMenuOpen
    }
  };
};

export default useMenu;
