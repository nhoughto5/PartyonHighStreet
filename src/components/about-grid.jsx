import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

import brin from '../images/brin.jpg';
import trav from '../images/trav.jpg';
import devon from '../images/devon.jpg';

const GridWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 7rem auto;
`;

const FlexItem = styled.div`
    display: flex;
    margin-bottom: 2rem;
    overflow: hidden;
`

const FlexSpaceBetween = FlexItem.extend`
    justify-content: space-between;
`

const FlexCentered = FlexItem.extend`
    justify-content: center;
`

const GridItem = styled.div`
    width: 48%;

    img {
        min-height: 300px;
        min-width: 100%;

        width: 100%;
        height: 300px;

        object-fit: cover;
        object-position: 0 0;
    }
`

const GridDesc = styled.div`
    padding: 1rem;
`

const AboutGrid = () => (
    <GridWrapper>
        <FlexSpaceBetween>
            <GridItem>
                <img src={brin} alt="Brin" />
                <GridDesc>
                    <h2>Brin</h2>
                    <p>Some description</p>
                </GridDesc>
            </GridItem>
            <GridItem>
                <img src={trav} alt="Brin" />
                <GridDesc>
                    <h2>Trav</h2>
                    <p>Some description</p>
                </GridDesc>
            </GridItem>
        </FlexSpaceBetween>
        <FlexCentered>
            <GridItem>
                <img src={devon} alt="Brin" />
                <GridDesc>
                    <h2>Devon</h2>
                    <p>Some description</p>
                </GridDesc>
            </GridItem>
        </FlexCentered>
    </GridWrapper>
);
  
export default AboutGrid;