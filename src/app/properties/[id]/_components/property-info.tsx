import type { FC } from 'react';

import type { Property } from '@/types';

import PropertyDetails from './property-details';

type Props = {
  property: Property;
};

const PropertyInfo: FC<Props> = ({ property }) => {
  return (
    <main>
      <PropertyDetails property={property} />

      <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
        <div id="map"></div>
      </div>
    </main>
  );
};

export default PropertyInfo;
