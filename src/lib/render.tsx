import type { Property } from '@/types';

import { PropertyCard, Spinner } from '@/components/ui';

const render = (
  properties: Property[],
  loading: boolean,
  title: string = 'No properties found'
) => {
  if (loading) {
    return <Spinner loading={loading} />;
  }

  if (properties.length === 0) {
    return <p>{title}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
};

export default render;
