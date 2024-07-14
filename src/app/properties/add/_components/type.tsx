import type { ChangeEvent, FC } from 'react';

import { ADD_PROPERTY_FORM_SELECT_OPTIONS } from '@/constants';

type Props = {
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  type: string;
};

const AddPropertyType: FC<Props> = ({ handleChange, type }) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block font-bold text-gray-700">
        Property Type
      </label>

      <select
        className="w-full rounded border px-3 py-2"
        name="type"
        onChange={handleChange}
        required
        value={type}
      >
        {ADD_PROPERTY_FORM_SELECT_OPTIONS.map(({ id, value }) => (
          <option key={id} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddPropertyType;
