import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const FooterWrapper = styled.div`
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

const Footer = () => (
    <FooterWrapper>
        <a href="#" class="fa fa-facebook"></a>
    </FooterWrapper>
);

export default Footer;
