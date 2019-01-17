import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Constants from '../classes/Constants';
import bandImage from '../images/band.jpg';
import bandImage2 from '../images/band1.jpg';
import bandImage3 from '../images/band2.jpg';
import bandImage4 from '../images/band3.jpg';
import wideAngle from '../images/wideangle.jpg';

const GridWrapper = styled.div`
    width: 100%;
    margin: 1rem auto;
    padding: 0 ${Constants.MAIN_PADDING}%;

    @media screen and (max-width: 700px) {
        margin: 2rem auto;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    flex-wrap: wrap;
`;

const DivWithImg = styled.div`
    overflow: hidden;
    position: relative;
    margin-bottom: 2rem;

    img {
        width: 100%;
        height: auto;

        min-height: 100%;
        min-width: 100%;

        object-fit: cover;
        opacity: 0.7;
        // filter: grayscale(1);
    }
`;

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
`;

const HalfWidth = DivWithImg.extend`
    width: 49%;
    height: 600px;

    @media screen and (max-width: 700px) {
        width: 100%;
        margin-bottom: 2rem;
        height: 250px;
    }
`;

const HalfStacked = HalfWidth.extend`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
    }
`;

const StackedItem = DivWithImg.extend`
    height: 48%;
    margin: 0;

    @media screen and (max-width: 700px) {
        height: 250px;
        width: 100%;

        &:first-child {
            margin-bottom: 2rem;
        }
    }
`;

const ThirdWidth = DivWithImg.extend`
    width: 35%;
    height: auto;

    @media screen and (max-width: 700px) {
        width: 100%;
        margin-bottom: 2rem;
    }
`;

const TwoThirdWidth = DivWithImg.extend`
    width: 64%;

    @media screen and (max-width: 700px) {
        width: 100%;
        margin-bottom: 2rem;
    }
`;

const Grid = () => (
    <GridWrapper>
        <FlexContainer>
            <HalfWidth>
                <Link to='/about/'>
                    <img src={bandImage} alt="About The Band" />
                    <Overlay><h2>About Us</h2></Overlay>
                </Link>
            </HalfWidth>
            <HalfStacked>
                <StackedItem>
                    <Link to='/tour/'>
                        <img className="tourImage" src={bandImage2} alt="Upcoming tour dates" />
                        <Overlay><h2>Tour</h2></Overlay>
                    </Link>
                </StackedItem>
                <StackedItem>
                    <a href="https://thepartyonhighstreet.bandcamp.com/">
                        <img src={bandImage3} alt="Music" />
                        <Overlay><h2>Music</h2></Overlay>
                    </a>
                </StackedItem>
            </HalfStacked>
            <ThirdWidth>
                <a href="https://www.facebook.com/thepartyonhighstreet/">
                    <img src={bandImage4} alt="Contact" />
                    <Overlay><h2>Contact</h2></Overlay>
                </a>
                {/* <Link to='/tour/'>
                    <img src={bandImage4} alt="Contact" />
                    <Overlay><h2>Contact</h2></Overlay>
                </Link> */}
            </ThirdWidth>
            <TwoThirdWidth>
                <Link to='/video/'>
                    <img src={wideAngle} alt="Videos" />
                    <Overlay><h2>Videos</h2></Overlay>
                </Link>
            </TwoThirdWidth>
        </FlexContainer>
    </GridWrapper>
);

export default Grid;
