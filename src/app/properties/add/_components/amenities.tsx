import type { ChangeEvent, FC } from 'react';

import { ADD_PROPERTY_AMENITIES_CHECKBOXES } from '@/constants';

type Props = {
  amenities: string[];
  handleAmenitiesChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AddPropertyAmenities: FC<Props> = ({
  amenities,
  handleAmenitiesChange
}) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block font-bold text-gray-700">Amenities</label>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {ADD_PROPERTY_AMENITIES_CHECKBOXES.map(({ id, value }) => (
          <div key={id}>
            <input
              checked={amenities.includes(value)}
              className="mr-2"
              name="amenities"
              onChange={handleAmenitiesChange}
              type="checkbox"
              value={value}
            />
            <label>{value}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPropertyAmenities;
