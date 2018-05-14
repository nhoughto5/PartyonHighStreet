import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60px;
  align-items: center;
  background-color: rgba(0,0,0,0.7);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const RightLinks = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    margin: 0 2rem;
    color: white;
    font-size: 150%;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <RightLinks>
      <Link to='/'>Link</Link>
      <Link to='/'>Link</Link>
      <Link to='/'>Link</Link>
      <Link to='/'>Link</Link>
    </RightLinks>
  </HeaderWrapper>
)

export default Header
