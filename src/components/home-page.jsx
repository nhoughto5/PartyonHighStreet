import React from 'react';
import FullPageBanner from './full-page-banner';
import Grid from './index-grid';
import BrinBannerAnim from './animations/brin-dive-anim';

const HomePage = () => (
  <div>
    <BrinBannerAnim />
    <Grid />
  </div>
);

export default HomePage;