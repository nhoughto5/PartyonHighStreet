import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

import bgImage from '../images/cover.jpg'

const BannerWrapper = styled.div`
    padding: 0 2rem;
`

const Banner = styled.div`
    height: 80vh;
    background-image: url(${bgImage});
    background-size: cover;
`

const FullPageBanner = () => (
    <BannerWrapper>
        <Banner></Banner>
    </BannerWrapper>
  )
  
  export default FullPageBanner