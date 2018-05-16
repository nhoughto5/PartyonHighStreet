import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  background-color: white;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const LeftLogo = styled.div`
  color: rgba(0,0,0,0.9);
  font-size: 150%;
  font-weight: 600;
`;

const RightLinks = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    margin: 0 2rem;
    color: rgba(0,0,0,0.5);
    font-size: 125%;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <LeftLogo>
      <Link to='/'>The Party On High Street</Link>
    </LeftLogo>
    <RightLinks>
      <Link to='/about/'>About</Link>
      <Link to='/videos/'>Videos</Link>
      <Link to='/'>Music</Link>
      <Link to='/'>News</Link>
    </RightLinks>
  </HeaderWrapper>
)

export default Header
