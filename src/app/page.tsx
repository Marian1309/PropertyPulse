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
      {/* @ts-ignore */}
      <FeaturedProperties />
      <HomeProperties />
    </>
  );
};

export default RootPage;
