import type { FC } from 'react';

import type { ContactInput as ContactInputType } from '@/types';

type Props = {
  contactInput: ContactInputType;
};

const ContactInput: FC<Props> = ({
  contactInput: { id, label, type, placeholder }
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
        placeholder={placeholder}
        required
        type={type}
      />
    </div>
  );
};

export default ContactInput;
