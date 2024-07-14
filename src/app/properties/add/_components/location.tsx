import type { ChangeEvent, FC } from 'react';

import type { Location } from '@/types';

import { LOCATION_INPUTS } from '@/constants';

type Props = {
  location: Location;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
};

const AddPropertyLocation: FC<Props> = ({ location, handleChange }) => {
  return (
    <div className="mb-4 bg-blue-50 p-4">
      <label className="mb-2 block font-bold text-gray-700">Location</label>

      {LOCATION_INPUTS.map((input) => (
        <input
          className="mb-2 w-full rounded border px-3 py-2"
          key={input.id}
          name={input.name}
          onChange={handleChange}
          placeholder={input.placeholder}
          type="text"
          value={location[input.name.split('.')[1]] || ''}
        />
      ))}
    </div>
  );
};

export default AddPropertyLocation;
