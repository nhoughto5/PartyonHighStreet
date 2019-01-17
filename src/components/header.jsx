import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  background-color: white;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  @media screen and (max-width: 460px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const LeftLogo = styled.div`
  color: rgba(0,0,0,0.9);
  font-size: 150%;
  font-weight: 600;

  @media screen and (max-width: 460px) {
    margin-bottom: 0.5rem;
  }
`;

const RightLinks = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    margin-left: 2rem;
    color: rgba(0,0,0,0.5);
    font-size: 125%;
  }

  @media screen and (max-width: 460px) {
    width: 100%;
    
    a {
      margin-left: 0;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <LeftLogo>
      <Link to='/'>The Party On High Street</Link>
    </LeftLogo>
    <RightLinks>
      <Link to='/'>Home</Link>
      <Link to='/about/'>About</Link>
      <Link to='/video/'>Videos</Link>
      <a href="https://thepartyonhighstreet.bandcamp.com/">Music</a>
      <Link to='/tour/'>Tour</Link>
    </RightLinks>
  </HeaderWrapper>
);

export default Header;
