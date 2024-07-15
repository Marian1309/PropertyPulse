import type { ChangeEvent, FC } from 'react';

import type { Rates } from '@/types';

import { ADD_PROPERTY_RATES } from '@/constants';

type Props = {
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  rates: Rates;
};

const AddPropertyRates: FC<Props> = ({ handleChange, rates }) => {
  return (
    <div className="mb-4 bg-blue-50 p-4">
      <label className="mb-2 block font-bold text-gray-700">
        Rates (Leave blank if not applicable)
      </label>

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        {ADD_PROPERTY_RATES.map((rate) => (
          <div className="flex items-center" key={rate.id}>
            <label className="mr-2">{rate.label}</label>

            <input
              className="w-full rounded border px-3 py-2"
              name={rate.name}
              onChange={handleChange}
              type="number"
              value={rates[rate.label.toLowerCase()] || ''}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPropertyRates;
