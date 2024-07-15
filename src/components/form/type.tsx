import type { ChangeEvent, FC } from 'react';

import type { AddPropertyFields, EditPropertyFields } from '@/types';

import { ADD_PROPERTY_FORM_SELECT_OPTIONS } from '@/constants';

type Props = {
  fields: AddPropertyFields | EditPropertyFields;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
};

const AddPropertyType: FC<Props> = ({ fields, handleChange }) => {
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
        value={fields.type}
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
