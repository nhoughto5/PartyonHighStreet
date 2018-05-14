import React from 'react'
import Link from 'gatsby-link'

import FullPageBanner from '../components/full-page-banner'
import LatestNews from '../components/index-news'
import Videos from '../components/index-videos'

const IndexPage = () => (
  <div>
    <FullPageBanner />
    <LatestNews />
    <Videos />
  </div>
)

export default IndexPage
