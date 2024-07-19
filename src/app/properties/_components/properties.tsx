'use client';

import type { FC } from 'react';

import render from '@/lib/render';

import { useProperties } from '@/hooks';

import { Pagination } from '@/components/ui';

const Properties: FC = () => {
  const { loading, properties, page, pageSize, totalItems, setPage } =
    useProperties();

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <section className="px-4 py-6">
      <div className="container-xl m-auto px-4 py-6 lg:container">
        {render(properties, loading)}

        <Pagination
          onPageChange={onPageChange}
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
        />
      </div>
    </section>
  );
};

export default Properties;
