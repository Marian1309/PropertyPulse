import type { FC } from 'react';

import { Hero } from '@/components/hero';
import HomeProperties from '@/components/home-properties';
import InfoBoxes from '@/components/info-boxes';

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
