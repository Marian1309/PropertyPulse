import type { FC } from 'react';

import { FaBath, FaBed, FaCheck, FaRulerCombined } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import type { Property } from '@/types';

import PropertyTypes from './property-types';

type Props = {
  property: Property;
};

const PropertyDetails: FC<Props> = ({ property }) => {
  return (
    <>
      <div className="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
        <div className="mb-4 text-gray-500">{property.type}</div>

        <h1 className="mb-4 text-3xl font-bold">{property.name}</h1>

        <div className="mb-4 flex justify-center align-middle text-gray-500 md:justify-start">
          <FaLocationDot className="mr-2 text-lg text-orange-700" />
          <p className="text-orange-700">
            {property.location.street}, {property.location.city}
            {property.location.state}
          </p>
        </div>

        <PropertyTypes property={property} />
      </div>

      <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-6 text-lg font-bold">Description & Details</h3>

        <div className="mb-4 flex justify-center gap-4 space-x-9 text-xl text-blue-500">
          <p className="flex items-center justify-center gap-x-3">
            <FaBed />{' '}
            <span className="hidden sm:inline">{property.beds} Beds</span>
          </p>

          <p className="flex items-center justify-center gap-x-3">
            <FaBath />{' '}
            <span className="hidden sm:inline">{property.baths} Baths</span>
          </p>

          <p className="flex items-center justify-center gap-x-3">
            <FaRulerCombined />
            <span className="hidden sm:inline">
              {property.square_feet} sqft
            </span>
          </p>
        </div>

        <p className="mb-4 text-gray-500">{property.description}</p>
      </div>

      <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-6 text-lg font-bold">Amenities</h3>

        <ul className="grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {property.amenities.map((amenity, index) => (
            <li key={index}>
              <FaCheck className="mr-2 inline-block text-green-600" /> {amenity}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
