'use client';

import type { ChangeEvent } from 'react';
import { type FC, useEffect, useState } from 'react';

import type { Fields } from '@/types';

import AddPropertyAmenities from './amenities';
import AddPropertyFurniture from './furniture';
import AddPropertyImages from './images';
import AddPropertyInput from './input';
import AddPropertyLocation from './location';
import AddPropertyRates from './rates';
import AddPropertyType from './type';

const AddPropertyForm: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [fields, setFields] = useState<Fields>({
    type: '',
    name: '',
    description: '',
    location: {
      street: '',
      city: '',
      state: '',
      zipcode: ''
    },
    beds: '',
    baths: '',
    square_feet: '',
    amenities: ['Wifi'],
    rates: {
      weekly: '',
      monthly: '',
      nightly: ''
    },
    seller_info: {
      name: '',
      email: '',
      phone: ''
    },
    images: []
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [outerKey, innerKey] = name.split('.');

      setFields((prevFields) => ({
        ...prevFields,
        [outerKey]: {
          ...prevFields[outerKey],
          [innerKey]: value
        }
      }));
    } else {
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value
      }));
    }
  };

  const handleAmenitiesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    const updatedAmenities = [...fields.amenities];

    if (checked) {
      updatedAmenities.push(value);
    } else {
      const index = updatedAmenities.indexOf(value);

      if (index !== -1) {
        updatedAmenities.splice(index, 1);
      }
    }

    setFields((prevFields) => ({
      ...prevFields,
      amenities: updatedAmenities
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    const updatedImages = [...fields.images];

    if (files) {
      for (const file of Array.from(files)) {
        updatedImages.push(file);
      }

      setFields((prevFields: Fields) => ({
        ...prevFields,
        images: updatedImages
      }));
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <form action="/api/properties" encType="multipart/form-data" method="POST">
      <h2 className="mb-6 text-center text-3xl font-semibold">Add Property</h2>

      <AddPropertyType handleChange={handleChange} type={fields.type} />

      <AddPropertyInput
        handleChange={handleChange}
        label="Listing Name"
        name="name"
        placeholder="eg. Beautiful Apartment In Miami"
        type="text"
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

      <AddPropertyAmenities
        amenities={fields.amenities}
        handleAmenitiesChange={handleAmenitiesChange}
      />

      <AddPropertyRates handleChange={handleChange} rates={fields.rates} />

      <AddPropertyInput
        handleChange={handleChange}
        label="Seller Name"
        name="seller_info.name"
        placeholder="Name"
        type="text"
        value={fields.seller_info.name}
      />

      <AddPropertyInput
        handleChange={handleChange}
        label="Seller Email"
        name="seller_info.email"
        placeholder="Email"
        type="email"
        value={fields.seller_info.email}
      />

      <AddPropertyInput
        handleChange={handleChange}
        label="Seller Phone"
        name="seller_info.phone"
        placeholder="Phone"
        type="text"
        value={fields.seller_info.phone}
      />

      <AddPropertyImages handleImageChange={handleImageChange} />

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
