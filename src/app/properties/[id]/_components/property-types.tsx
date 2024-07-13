import type { FC } from 'react';

import { FaTimes } from 'react-icons/fa';

import type { Property, RentObj, RentType } from '@/types';

type Props = {
  property: Property;
};

const PropertyTypes: FC<Props> = ({ property }) => {
  const getAmountOfMoneyByRentType = (type: RentType) => {
    return (
      <>
        {property.rates[type] ? (
          <p className="text-blue-500">
            ${`${property.rates[type].toLocaleString()}`}
          </p>
        ) : (
          <FaTimes className="text-red-700" />
        )}
      </>
    );
  };

  const RENT_TYPES: RentObj[] = [
    { id: 1, label: 'Nightly', type: 'nightly' },
    { id: 2, label: 'Weekly', type: 'weekly' },
    { id: 3, label: 'Monthly', type: 'monthly' }
  ];

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
            <div className="text-2xl font-bold">
              {getAmountOfMoneyByRentType(rentType.type)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertyTypes;
