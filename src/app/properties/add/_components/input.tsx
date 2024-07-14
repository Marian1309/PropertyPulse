'use client';

import type { FC } from 'react';

import { useFields } from '@/hooks';

type Props = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
};

const AddPropertyInput: FC<Props> = ({
  label,
  name,
  placeholder,
  type = 'text',
  value
}) => {
  const { handleChange } = useFields();

  return (
    <div className="mb-4">
      <label className="mb-2 block font-bold text-gray-700">{label}</label>

      <input
        className="mb-2 w-full rounded border px-3 py-2"
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required
        type={type}
        value={value}
      />
    </div>
  );
};

export default AddPropertyInput;
