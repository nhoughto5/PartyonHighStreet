import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

import bandImage from '../images/band.jpg'
import bandImage2 from '../images/band1.jpg'
import bandImage3 from '../images/band2.jpg'
import bandImage4 from '../images/band3.jpg'
import wideAngle from '../images/wideangle.jpg'

const GridWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 7rem auto;
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
`

const DivWithImg = styled.div`
    overflow: hidden;
    position: relative;

    img {
        min-height: 100%;
        min-width: 100%;

        width: 100%;
        height: auto;

        object-fit: cover;
        opacity: 0.7;
        filter: grayscale(1);
    }
`

const Overlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    &:hover {
        background-color: rgba(0,0,0,0.2);
    }
`

const HalfWidth = DivWithImg.extend`
    width: 48%;
    height: 600px;
`

const HalfStacked = HalfWidth.extend`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StackedItem = DivWithImg.extend`
    height: 48%;
`

const ThirdWidth = DivWithImg.extend`
    width: 31%;
    height: 250px;
`

const TwoThirdWidth = DivWithImg.extend`
    width: 64%;
`

const Grid = () => (
    <GridWrapper>
        <FlexContainer>
            <HalfWidth>
                <img src={bandImage} alt="About The Band"/>
                <Overlay><h2>About Us</h2></Overlay>
            </HalfWidth>
            <HalfStacked>
                <StackedItem>
                    <img src={bandImage2} alt="About The Band"/>
                    <Overlay><h2>News</h2></Overlay>
                </StackedItem>
                <StackedItem>
                    <img src={bandImage3} alt="About The Band"/>
                    <Overlay><h2>Shows</h2></Overlay>
                </StackedItem>
            </HalfStacked>
        </FlexContainer>
        <FlexContainer>
            <ThirdWidth>
                <img src={bandImage4} alt="About The Band"/>
                <Overlay><h2>Images</h2></Overlay>
            </ThirdWidth>
            <TwoThirdWidth>
                <img src={wideAngle} alt="About The Band"/>
                <Overlay><h2>Videos</h2></Overlay>
            </TwoThirdWidth>
        </FlexContainer>
    </GridWrapper>
)

export default Grid
