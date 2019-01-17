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
                    <BoldText>Victoria, BC, Canada</BoldText>
                    <p>Since finding each other in Nelson, B.C. back in 2008, The Party on High Street has worked tirelessly to bring it's signature feel-good funk jams to the people. They are a lively dance-inducing mix of funk, folk, and jazz-fuelled rock n' roll, joyfully delivered and presented like a funbomb waiting to make you jive. The band sings of peculiar youthful enchantments, weird love, and some of the odder aspects of life. With 8 studio albums and hundreds of live shows under their belt, The Party on High Street are seasoned professionals who will leave you wishing the party never had to end.</p>
                </GridDesc>
            </GridItem>
            <GridItem>
                <img src={devon} alt="Devon" />
                <GridDesc>
                    <h2>Devon</h2>
                    <BoldText>Drums / Vocals</BoldText>
                    <p>It all started in the back of a Winnebago parked in a front driveway, almost leaning out on to the road in front of my grandmothers home". His drum kit was hoisted on the back bed and guitar amp elevated apon the toilet. One day Devon, decided to traverse himself in music as a career and has been pushing forth down that path for the past 7 years. He currently is a touring drummer for Canada and U.S.A. with solid roots with "The Party On High Street". Touring usually half the year with different groups from all genres including, : Swing, Jazz, Funk, Folk, and Country. He currently resides in Vancouver and has been keeping himself as the house city drummer and touring drummer when called upon.</p>
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