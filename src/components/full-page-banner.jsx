import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

import bgImage from '../images/cover.jpg'

const BannerWrapper = styled.div`
    height: 100vh;
    background-image: url(${bgImage});
    background-size: cover;
`

const FullPageBanner = () => (
    <BannerWrapper>
    </BannerWrapper>
  )
  
  export default FullPageBanner