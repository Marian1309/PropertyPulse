import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  FaBath,
  FaBed,
  FaMapMarker,
  FaMoneyBill,
  FaRulerCombined
} from 'react-icons/fa';

import type { Property } from '@/types';

type Props = {
  property: Property;
};

const PropertyCard: FC<Props> = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className="relative rounded-xl bg-white shadow-md">
      <Image
        alt=""
        className="h-auto w-full rounded-t-xl"
        height={0}
        sizes="100vw"
        src={property.images[0]}
        width={0}
      />

      <div className="p-4">
        <div className="mb-6 text-left md:text-center lg:text-left">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="flex min-h-[56px] items-center justify-center text-xl font-bold">
            {property.name}
          </h3>
        </div>

        <h3 className="absolute right-[10px] top-[10px] rounded-lg bg-white px-4 py-2 text-right font-bold text-blue-500 md:text-center lg:text-right">
          ${getRateDisplay()}
        </h3>

        <div className="mb-4 flex justify-center gap-4 text-gray-500">
          <p>
            <FaBed className="mr-2 inline" />
            {property.beds}
            <span className="md:hidden lg:inline">Beds</span>
          </p>

          <p>
            <FaBath className="mr-2 inline" /> {property.baths}
            <span className="md:hidden lg:inline">Baths</span>
          </p>

          <p>
            <FaRulerCombined className="mr-2 inline" />
            {property.square_feet}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="mb-4 flex justify-center gap-4 text-sm text-green-900">
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className="mr-2 inline" /> Nightly
            </p>
          )}

          {property.rates.weekly && (
            <p>
              <FaMoneyBill className="mr-2 inline" /> Weekly
            </p>
          )}

          {property.rates.monthly && (
            <p>
              <FaMoneyBill className="mr-2 inline" /> Monthly
            </p>
          )}
        </div>

        <div className="mb-5 border border-gray-100"></div>

        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mb-4 flex flex-1 gap-2 align-middle lg:mb-0">
            <FaMapMarker className="text-orange-700" />

            <span className="text-orange-700">
              {property.location.city} {property.location.state}
            </span>
          </div>

          <Link
            className="h-[36px] rounded-lg bg-blue-500 px-4 py-2 text-center text-sm text-white hover:bg-blue-600"
            href={`/properties/${property._id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
