'use client';

import type { FC } from 'react';

import render from '@/lib/render';

import { useProperties } from '@/hooks';

const Properties: FC = () => {
  const { loading, properties } = useProperties();

  return (
    <section className="px-4 py-6">
      <div className="container-xl m-auto px-4 py-6 lg:container">
        {render(properties, loading)}
      </div>
    </section>
  );
};

export default Properties;
