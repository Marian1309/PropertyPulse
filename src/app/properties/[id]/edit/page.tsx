import type { FC } from 'react';

import { EditPropertyForm } from './_components';

const PropertyEditPage: FC = () => {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-12">
        <div className="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
          <EditPropertyForm />
        </div>
      </div>
    </section>
  );
};

export default PropertyEditPage;
