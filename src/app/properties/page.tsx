import { Properties } from './_components';

import { PropertySearchForm } from '@/components/ui';

const PropertiesPage = () => {
  return (
    <>
      <div className="bg-blue-700 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </div>

      <Properties />
    </>
  );
};

export default PropertiesPage;
