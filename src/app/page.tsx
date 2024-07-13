import type { FC } from 'react';

import { Hero, HomeProperties, InfoBoxes } from './_components';

const RootPage: FC = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      {/* @ts-ignore */}
      <HomeProperties />
    </>
  );
};

export default RootPage;
