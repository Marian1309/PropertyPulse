'use client';

import type { FC } from 'react';

import Link from 'next/link';

import { FaArrowLeft } from 'react-icons/fa';

import { useProperty } from '@/hooks';

import {
  ContactSidebar,
  PropertyHeaderImage,
  PropertyImages,
  PropertyInfo
} from './_components';

import { Spinner } from '@/components/ui';

const ProperyPage: FC = () => {
  const { property, loading } = useProperty();

  if (!property && !loading) {
    return (
      <h1 className="mt-10 text-center text-2xl font-bold">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}

      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />

          <section>
            <div className="container m-auto px-6 py-6">
              <Link
                className="flex items-center justify-center gap-x-2 text-blue-500 hover:text-blue-600"
                href="/properties"
              >
                <FaArrowLeft /> Back to Properties
              </Link>
            </div>
          </section>

          <section className="bg-blue-50">
            <div className="container m-auto px-6 py-6">
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-70/30">
                <PropertyInfo property={property} />

                <ContactSidebar />
              </div>
            </div>
          </section>

          <PropertyImages images={property.images} />
        </>
      )}
    </>
  );
};

export default ProperyPage;
