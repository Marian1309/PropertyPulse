import type { ChangeEvent, FC } from 'react';

import type { Fields } from '@/types';

import { ADD_PROPERTY_FORM_FUNTITURES } from '@/constants';

type Props = {
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  fields: Fields;
};

const AddPropertyFurniture: FC<Props> = ({ handleChange, fields }) => {
  return (
    <div className="mb-4 flex flex-wrap">
      {ADD_PROPERTY_FORM_FUNTITURES.map((input) => (
        <div className="w-full pr-2 sm:w-1/3" key={input.id}>
          <label className="mb-2 block font-bold text-gray-700">
            {input.label}
          </label>

          <input
            className="w-full rounded border px-3 py-2"
            name={input.name}
            onChange={handleChange}
            required
            type="number"
            value={fields[input.name]}
          />
        </div>
      ))}
    </div>
  );
};

export default AddPropertyFurniture;
