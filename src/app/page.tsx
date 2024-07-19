import type { FC } from 'react';

import {
  FeaturedProperties,
  Hero,
  HomeProperties,
  InfoBoxes
} from './_components';

const RootPage: FC = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      {/* @ts-ignore */}
      <HomeProperties />
    </>
  );
};

export default RootPage;
