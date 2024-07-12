import type { FC } from 'react';

import { Hero } from '@/components/hero';
import InfoBoxes from '@/components/info-boxes';

const RootPage: FC = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  );
};

export default RootPage;
