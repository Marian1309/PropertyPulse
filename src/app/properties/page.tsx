import type { FC } from 'react';

import PROPERTIES from '@/constants/properties.json';

import PropertyCard from '@/components/ui/property-card';

const PropertiesPage: FC = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl m-auto px-4 py-6 lg:container">
        {PROPERTIES.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROPERTIES.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
