'use client';

import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { PROPERTY_TYPE_OPTIONS } from '@/constants';

import { handleChange } from '@/lib/utils';

const PropertySearchForm: FC = () => {
  const [location, setLocation] = useState<string>('');
  const [propertyType, setPropertyType] = useState<string>('All');

  const router = useRouter();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (location === '' && propertyType === 'All') {
      router.push('/properties');
    } else {
      const query = `?location=${location}&propertyType=${propertyType}`;
      router.push(`/properties/search-results${query}`);
    }
  };

  return (
    <form
      className="mx-auto mt-3 flex w-full max-w-2xl flex-col items-center md:flex-row"
      onSubmit={handleSubmit}
    >
      <div className="mb-4 w-full md:mb-0 md:w-3/5 md:pr-2">
        <input
          className="w-full rounded-lg bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
          onChange={handleChange(setLocation)}
          placeholder="Enter Keywords or Location "
          type="text"
          value={location}
        />
      </div>

      <div className="w-full md:w-2/5 md:pl-2">
        <select
          className="w-full rounded-lg bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
          onChange={handleChange(setPropertyType)}
        >
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

export default PropertySearchForm;
