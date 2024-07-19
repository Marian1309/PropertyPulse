import { fetchProperties } from '@/lib/requests';

import FeaturedPropertyCard from './featured-property-card';

const FeaturedProperties = async () => {
  const properties = await fetchProperties({
    showFeatured: true
  });

  return (
    <>
      {properties.length !== 0 && (
        <section className="bg-blue-50 p-4">
          <div className="container-xl m-auto lg:container">
            <h2 className="mb-6 text-center text-3xl font-bold text-blue-500">
              Featured Properties
            </h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {properties.map((property) => (
                <FeaturedPropertyCard key={property._id} property={property} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FeaturedProperties;
