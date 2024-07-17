import type { MutableRefObject, SetStateAction } from 'react';
import { useEffect, useRef } from 'react';

type Return = (
  setIsProfileMenuOpen: (value: SetStateAction<boolean>) => void
) => MutableRefObject<HTMLDivElement | null>;

const useProfileDropdown: Return = (setIsProfileMenuOpen) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsProfileMenuOpen]);

  return dropdownRef;
};

export default useProfileDropdown;
