import type { FC } from 'react';

import { Hero, HomeProperties, InfoBoxes } from './_components';

const RootPage: FC = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default RootPage;
