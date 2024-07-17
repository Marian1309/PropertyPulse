'use client';

import type { FC } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { FaArrowAltCircleLeft } from 'react-icons/fa';

import render from '@/lib/render';

import { useSearchResults } from '@/hooks';

import { PropertySearchForm, Spinner } from '@/components/ui';

const SearchResultsPage: FC = () => {
  const searchParams = useSearchParams();

  const { loading, properties } = useSearchResults(searchParams);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>

      <section className="px-4 py-6">
        <div className="container-xl m-auto px-4 py-6 lg:container">
          <Link
            className="mb-3 flex items-center text-blue-500 hover:underline"
            href="/properties"
          >
            <FaArrowAltCircleLeft className="mb-1 mr-2" /> Back To Properties
          </Link>

          <h1 className="mb-4 text-2xl">Search Results</h1>

          {render(properties, 'No search results found')}
        </div>
      </section>
    </>
  );
};

export default SearchResultsPage;
