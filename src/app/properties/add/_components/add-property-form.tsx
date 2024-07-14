'use client';

import type { FC } from 'react';

import { useFields } from '@/hooks';

import AddPropertyAmenities from './amenities';
import AddPropertyFurniture from './furniture';
import AddPropertyImages from './images';
import AddPropertyInput from './input';
import AddPropertyLocation from './location';
import AddPropertyRates from './rates';
import AddPropertyType from './type';

const AddPropertyForm: FC = () => {
  const { isMounted, fields, handleChange } = useFields();

  if (!isMounted) {
    return null;
  }

  return (
    <form action="/api/properties" encType="multipart/form-data" method="POST">
      <h2 className="mb-6 text-center text-3xl font-semibold">Add Property</h2>

      <AddPropertyType />

      <AddPropertyInput
        label="Listing Name"
        name="name"
        placeholder="eg. Beautiful Apartment In Miami"
        value={fields.name}
      />

      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">
          Description
        </label>

        <textarea
          className="w-full rounded border px-3 py-2"
          name="description"
          onChange={handleChange}
          placeholder="Add an optional description of your property"
          rows={4}
          value={fields.description}
        />
      </div>

      <AddPropertyLocation
        handleChange={handleChange}
        location={fields.location}
      />

      <AddPropertyFurniture fields={fields} handleChange={handleChange} />

      <AddPropertyAmenities />

      <AddPropertyRates handleChange={handleChange} rates={fields.rates} />

      <AddPropertyInput
        label="Seller Name"
        name="seller_info.name"
        placeholder="Name"
        type="text"
        value={fields.seller_info.name}
      />

      <AddPropertyInput
        label="Seller Email"
        name="seller_info.email"
        placeholder="Email"
        type="email"
        value={fields.seller_info.email}
      />

      <AddPropertyInput
        label="Seller Phone"
        name="seller_info.phone"
        placeholder="Phone"
        value={fields.seller_info.phone}
      />

      <AddPropertyImages />

      <div>
        <button
          className="focus:shadow-outline w-full rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
          type="submit"
        >
          Add Property
        </button>
      </div>
    </form>
  );
};

export default AddPropertyForm;
