'use client';

import type { FC } from 'react';

import type { Property } from '@/types';

import { useSavedProperties } from '@/hooks';

import { PropertyCard, Spinner } from '@/components/ui';

const SavedpropertiesPage: FC = () => {
  const { loading, properties } = useSavedProperties();

  if (loading) {
    return <Spinner loading={loading} />;
  }

  const render = (properties: Property[]) => {
    if (properties.length === 0) {
      return <p>No saved properties</p>;
    }

    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    );
  };

  return (
    <section className="px-4 py-6">
      <div className="my-2 text-center text-2xl font-bold text-blue-500">
        Saved Properties
      </div>

      <div className="container-xl m-auto px-4 py-6 lg:container">
        {render(properties)}
      </div>
    </section>
  );
};

export default SavedpropertiesPage;
