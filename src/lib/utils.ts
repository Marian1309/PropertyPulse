import type { ChangeEvent, Dispatch, FocusEvent, SetStateAction } from 'react';

import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export const handleChange =
  (setter: Dispatch<SetStateAction<string>>) =>
  (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setter(e.target.value);
  };

export const handleOnBlurReset = (e: FocusEvent<HTMLInputElement, Element>) => {
  if (e.target.value === '0') {
    e.target.value = '';
  }
};
