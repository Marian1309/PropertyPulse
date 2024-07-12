import type { FC } from 'react';

import { InfoBox } from './ui';

const InfoBoxes: FC = () => {
  return (
    <section>
      <div className="container-xl m-auto lg:container">
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
          <InfoBox
            buttonInfo={{
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-black'
            }}
            heading="For Renters"
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>

          <InfoBox
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: 'Add Property',
              link: '/properties/add',
              backgroundColor: 'bg-blue-500'
            }}
            heading="For Renters"
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
