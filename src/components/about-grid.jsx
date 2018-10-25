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
    padding: 0 2rem;
`;

const FlexItem = styled.div`
    display: flex;
    margin-bottom: 2rem;
    overflow: hidden;
    flex-wrap: wrap;
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

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

const GridDesc = styled.div`
    padding: 1rem 0;
`

const BoldText = styled.p`
    font-weight: 600;
    padding-bottom: 1rem;
`

const AboutGrid = () => (
    <GridWrapper>
        <FlexSpaceBetween>
            <GridItem>
                <GridDesc>
                    <h2>The Party On High Street</h2>
                    <BoldText>victoria, bc, canada</BoldText>
                    <p>Since finding each other in Nelson, B.C. back in 2008, The Party on High Street has worked tirelessly to bring it's signature feel-good funk jams to the people. They are a lively dance-inducing mix of funk, folk, and jazz-fuelled rock n' roll, joyfully delivered and presented like a funbomb waiting to make you jive. The band sings of peculiar youthful enchantments, weird love, and some of the odder aspects of life. With 8 studio albums and hundreds of live shows under their belt, The Party on High Street are seasoned professionals who will leave you wishing the party never had to end.</p>
                </GridDesc>
            </GridItem>
            <GridItem>
                <img src={devon} alt="Devon" />
                <GridDesc>
                    <h2>Devon</h2>
                    <BoldText>Drums / Vocals</BoldText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec eros eu odio rhoncus iaculis et ut dui. Aliquam nunc ante, placerat eu cursus in, rutrum a nibh. Donec maximus dignissim dui. Nunc condimentum ipsum lectus, sit amet efficitur metus sollicitudin nec. Aenean eu tortor non nisi finibus consectetur eget id massa. Proin nec auctor massa. Nunc tincidunt, enim in molestie maximus, purus turpis vulputate odio, a malesuada risus ligula nec neque. Nunc pharetra libero blandit urna porta, ac pharetra elit mollis. Maecenas eget urna in ligula semper porta ac eu purus. Nam dictum facilisis turpis, in bibendum sapien laoreet ut. Nam libero ipsum, vehicula a massa sed, porttitor venenatis nisl.</p>
                </GridDesc>
            </GridItem>
        </FlexSpaceBetween>
        <FlexSpaceBetween>
            <GridItem>
                <img src={brin} alt="Brin" />
                <GridDesc>
                    <h2>Brin</h2>
                    <BoldText>Bass / Vocals</BoldText>
                    <p>Brin has been carrying around a stand-up bass since he was 10 years old. Starting out playing classical music, he quickly grabbed on to jazz , and eventually found himself playing rock, funk, folk, and punk. Throughout his entire career, he has been an avid songwriter as well. whether it be for "The Party on High Street", his one-man-band "The Brain Porter", or arranging string and vocal jazz arrangements, he constantly likes to put his signature dark and bouncy edge on everything he does.</p>
                </GridDesc>
            </GridItem>
            <GridItem>
                <img src={trav} alt="Trav" />
                <GridDesc>
                    <h2>Trav</h2>
                    <BoldText>guitar / vocals</BoldText>
                    <p>T-rav The Transformer picked up his dad’s old El Dorado acoustic guitar about 16 years ago, and began jamming with his friends, frequenting the beaches and forests of Tsawwassen, B.C. where he grew up. Once T-rav discovered the electric guitar, he acquired a Squire Stratocaster, and started digging into Hendrix, Zeppelin, The Doors, Sabbath, and The Allman’s. After years of self teaching, he attended the Selkirk College Music program in Nelson B.C. There he lived in a magical musical party house on High St. After jamming relentlessly with his housemates, he decided that they should start a band, named after the High St vibe. Shortly after, Brin met Trav and joined the band, and after college, moved to Victoria B.C. And after 10 years of summer touring, festivals, shows, recording and spreading the funk around the world, The Party is rocking more than ever! Today, T-rav works as an audio recording engineer, guitar teacher and artistic painter. His go-to guitar is an S-1 American Strat, through a vintage Hot Rod Deville 4x10, with at least a TubeScreamer and Cry-Baby Wah!</p>
                </GridDesc>
            </GridItem>
        </FlexSpaceBetween>
        {/* <FlexCentered>
            <GridItem>
                <img src={devon} alt="Brin" />
                <GridDesc>
                    <h2>Devon</h2>
                    <BoldText>drums / vocals</BoldText>
                </GridDesc>
            </GridItem>
        </FlexCentered> */}
    </GridWrapper>
);
  
export default AboutGrid;