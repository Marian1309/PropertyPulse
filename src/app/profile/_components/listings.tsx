import type { FC } from 'react';

import type { Property } from '@/types';

import { Spinner } from '@/components/ui';

import ProfileListing from './listing';

type Props = {
  properties: Property[];
  loading: boolean;
};

const ProfileListings: FC<Props> = ({ properties, loading }) => {
  const render = () => {
    if (!loading && properties.length === 0) {
      return <p>You have no property listings</p>;
    }

    if (loading) {
      return <Spinner loading={loading} />;
    }

    return (
      <>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {properties.map((property) => (
            <ProfileListing key={property._id} property={property} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="md:w-3/4 md:pl-4">
      <h2 className="my-4 text-xl font-semibold">Your Listings</h2>

      {render()}
    </div>
  );
};

export default ProfileListings;
