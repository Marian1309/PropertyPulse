'use client';

import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import type { Property } from '@/types';

import { useUserProperties } from '@/hooks';

type Props = {
  property: Property;
};

const ProfileListing: FC<Props> = ({ property }) => {
  const { handleDeleteProperty } = useUserProperties();
  const router = useRouter();

  const handleDelete = async () => {
    await handleDeleteProperty(property._id);
    router.refresh();
  };

  return (
    <div className="mb-10" key={property._id}>
      <Link href={`/properties/${property._id}`}>
        <Image
          alt={`Property ${property.name}`}
          className="h-32 w-full rounded-md object-cover"
          height={100}
          priority
          src={property.images[0]}
          width={500}
        />
      </Link>

      <div className="mt-2">
        <p className="text-lg font-semibold">{property.name}</p>
        <p className="text-gray-600">
          Address: {property.location.street} {property.location.city}{' '}
          {property.location.state}
        </p>
      </div>

      <div className="mt-2">
        <Link
          className="mr-2 rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
          href={`/properties/${property._id}/edit`}
        >
          Edit
        </Link>

        <button
          className="rounded-md bg-red-500 px-3 py-[7px] text-white hover:bg-red-600"
          onClick={handleDelete}
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileListing;
