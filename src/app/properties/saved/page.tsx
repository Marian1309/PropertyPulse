'use client';

import type { FC } from 'react';

import render from '@/lib/render';

import { useSavedProperties } from '@/hooks';

import { Spinner } from '@/components/ui';

const SavedpropertiesPage: FC = () => {
  const { loading, properties } = useSavedProperties();

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <section className="px-4 py-6">
      <div className="my-2 text-center text-2xl font-bold text-blue-500">
        Saved Properties
      </div>

      <div className="container-xl m-auto px-4 py-6 lg:container">
        {render(properties, loading, 'No saved properties')}
      </div>
    </section>
  );
};

export default SavedpropertiesPage;
