import Link from 'next/link';

import type { Property } from '@/types';

import { fetchProperties } from '@/lib/requests';

import { PropertyCard } from '@/components/ui';

const HomeProperties = async () => {
  const properties: Property[] = await fetchProperties();

  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  const render = (properties: Property[]) => {
    if (properties.length === 0) {
      return <p>No Properties Found</p>;
    }

    return (
      <>
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </>
    );
  };

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl m-auto lg:container">
          <h2 className="mb-8 text-center text-3xl font-bold text-blue-500">
            Recent Properties
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {render(recentProperties)}
          </div>
        </div>
      </section>

      <section className="m-auto my-10 max-w-lg px-6">
        <Link
          className="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-700"
          href="/properties"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
