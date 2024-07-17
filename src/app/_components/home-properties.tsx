import Link from 'next/link';

import type { Property } from '@/types';

import render from '@/lib/render';
import { fetchProperties } from '@/lib/requests';

const HomeProperties = async () => {
  const properties: Property[] = await fetchProperties();

  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl m-auto lg:container">
          <h2 className="mb-8 text-center text-3xl font-bold text-blue-500">
            Recent Properties
          </h2>

          {render(recentProperties)}
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
