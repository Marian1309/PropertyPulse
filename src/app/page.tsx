import type { FC } from 'react';

import { Hero, HomeProperties, InfoBoxes } from './_components';

const RootPage: FC = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      {/* @ts-expect-error Server Component */}
      <HomeProperties />
    </>
  );
};

export default RootPage;
