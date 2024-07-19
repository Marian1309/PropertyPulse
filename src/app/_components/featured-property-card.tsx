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

const FeaturedPropertyCard: FC<Props> = ({ property }) => {
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
    <div className="relative flex flex-col rounded-xl bg-white shadow-md md:flex-row">
      <Image
        alt=""
        className="w-full rounded-t-xl object-cover md:w-2/5 md:rounded-l-xl md:rounded-tr-none"
        height={0}
        sizes="100vw"
        src={property.images[0]}
        width={0}
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">{property.name}</h3>

        <div className="mb-4 text-gray-600">{property.type}</div>

        <h3 className="absolute left-[10px] top-[10px] rounded-lg bg-white px-4 py-2 text-right font-bold text-blue-500 md:text-center lg:text-right">
          ${getRateDisplay()}
        </h3>

        <div className="mb-4 flex justify-center gap-4 text-gray-500">
          <p>
            <FaBed className="mr-2 inline-block" /> {property.beds}
            <span className="md:hidden lg:inline">Beds</span>
          </p>

          <p>
            <FaBath className="mr-2 inline-block" /> {property.baths}
            <span className="md:hidden lg:inline">Baths</span>
          </p>

          <p>
            <FaRulerCombined className="mr-2 inline-block" />
            {property.square_feet}{' '}
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

        <div className="mb-5 border border-gray-200"></div>

        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mb-4 flex gap-2 align-middle lg:mb-0">
            <FaMapMarker className="text-orange-700" />
            <span className="text-orange-700">
              {' '}
              {property.location.city} {property.location.state}{' '}
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

export default FeaturedPropertyCard;
