'use client';

import type { FC } from 'react';

import type { ContactInput as ContactInputType } from '@/types';

import { handleChange } from '@/lib/utils';

type Props = {
  contactInput: ContactInputType;
};

const ContactInput: FC<Props> = ({
  contactInput: { id, label, type, placeholder, value, setter }
}) => {
  return (
    <div className="mb-4">
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>

      <input
        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        id={id}
        onChange={handleChange(setter)}
        placeholder={placeholder}
        required
        type={type}
        value={value}
      />
    </div>
  );
};

export default ContactInput;
