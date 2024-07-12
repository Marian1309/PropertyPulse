import type { FC } from 'react';

import { PROPERTY_TYPE_OPTIONS } from '@/constants';

const HeroForm: FC = () => {
  return (
    <form className="mx-auto mt-3 flex w-full max-w-2xl flex-col items-center md:flex-row">
      <div className="mb-4 w-full md:mb-0 md:w-3/5 md:pr-2">
        <input
          className="w-full rounded-lg bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Enter Location (City, State, Zip, etc)"
          type="text"
        />
      </div>

      <div className="w-full md:w-2/5 md:pl-2">
        <select className="w-full rounded-lg bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500">
          {PROPERTY_TYPE_OPTIONS.map(({ label }) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <button
        className="mt-4 w-full rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 md:ml-4 md:mt-0 md:w-auto"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default HeroForm;
