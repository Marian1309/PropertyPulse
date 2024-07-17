import type { Property } from '@/types';

import { fetchProperties } from '@/lib/requests';

import PropertyCard from '@/components/ui/property-card';

const PropertiesPage = async () => {
  const properties: Property[] = await fetchProperties();

  const render = (properties: Property[]) => {
    if (properties.length === 0) {
      return <p>No properties found</p>;
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
      <div className="container-xl m-auto px-4 py-6 lg:container">
        {render(properties)}
      </div>
    </section>
  );
};

export default PropertiesPage;
