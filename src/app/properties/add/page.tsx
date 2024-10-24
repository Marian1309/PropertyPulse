import type { FC } from 'react';

import { AddPropertyForm } from './_components';

const AddPropertyPage: FC = () => {
  return (
    <section className="">
      <div className="container m-auto max-w-2xl py-12">
        <div className="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
          <AddPropertyForm />
        </div>
      </div>
    </section>
  );
};

export default AddPropertyPage;
