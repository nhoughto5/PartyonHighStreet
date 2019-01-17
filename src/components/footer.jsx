import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  height: 20px;
  align-items: center;
  background-color: white;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BandName = styled.div`
    font-size: 1rem;
    text-align: center;
`;

const Footer = () => (
    <FooterWrapper>
        <BandName>The Party on High Street</BandName>
    </FooterWrapper>
);

export default Footer;
