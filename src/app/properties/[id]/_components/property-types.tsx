import type { FC } from 'react';

import { FaTimes } from 'react-icons/fa';

import type { Property, RentObj } from '@/types';

import { RENT_TYPES } from '@/constants';

type Props = {
  property: Property;
};

const PropertyTypes: FC<Props> = ({ property }) => {
  const renderPrice = (rentType: RentObj) => {
    if (property?.rates[rentType.type]) {
      return (
        <p className="text-blue-500">
          ${`${property?.rates?.[rentType?.type]?.toLocaleString()}`}
        </p>
      );
    }

    return <FaTimes className="text-red-700" />;
  };

  return (
    <>
      <h3 className="my-6 bg-gray-800 p-2 text-lg font-bold text-white">
        Rates & Options
      </h3>

      <div className="flex flex-col justify-around md:flex-row">
        {RENT_TYPES.map((rentType) => (
          <div
            className="mb-4 flex items-center justify-center border-b border-gray-200 pb-4 md:border-b-0 md:pb-0"
            key={rentType.id}
          >
            <div className="mr-2 font-bold text-gray-500">{rentType.label}</div>

            <div className="text-2xl font-bold">{renderPrice(rentType)}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertyTypes;
