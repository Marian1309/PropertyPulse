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
    </main>
  );
};

export default PropertyInfo;
