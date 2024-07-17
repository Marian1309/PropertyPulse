import type { FC } from 'react';

import Link from 'next/link';

const InfoBoxes: FC = () => {
  return (
    <section>
      <div className="container-xl m-auto lg:container">
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
          <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">For Renters</h2>

            <p className="mb-4 mt-2 text-gray-800">
              Find your dream rental property. Bookmark properties and contact
              owners.
            </p>

            <Link
              className="inline-block rounded-lg bg-black px-4 py-2 text-white hover:opacity-80"
              href="/properties"
            >
              Browse Properties
            </Link>
          </div>

          <div className="rounded-lg bg-blue-100 p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">
              For Property Owners
            </h2>

            <p className="mb-4 mt-2 text-gray-800">
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </p>

            <Link
              className="inline-block rounded-lg bg-blue-500 px-4 py-2 text-white hover:opacity-80"
              href="/properties/add"
            >
              Add Property
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
