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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ipsum pulvinar, consectetur tortor vitae, consectetur sapien. Donec non molestie velit. Curabitur mattis bibendum lectus id luctus. Suspendisse vulputate vulputate lacinia. Donec sit amet felis sit amet dolor vestibulum egestas. Ut sed ultricies arcu. Sed porta pretium consectetur.</p>
                    <p>Vivamus efficitur nibh risus, sed aliquam diam rutrum a. Proin molestie nisi id eros aliquet commodo vel vitae justo. Aliquam sodales mollis ante, vitae facilisis diam convallis ut. Morbi suscipit eget diam sit amet ultricies. Duis efficitur auctor dictum. Cras pellentesque mi elit, a imperdiet dui mattis sed. Proin interdum urna in.</p>
                </GridDesc>
            </GridItem>
            <GridItem>
                <img src={devon} alt="Brin" />
                <GridDesc>
                    <h2>Devon</h2>
                    <BoldText>drums / vocals</BoldText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit varius neque vitae posuere. Sed tellus turpis, dapibus at venenatis nec, ornare sit amet neque. Duis et rhoncus augue. Fusce consectetur ante eu lorem rhoncus</p>
                </GridDesc>
            </GridItem>
        </FlexSpaceBetween>
        <FlexSpaceBetween>
            <GridItem>
                <img src={brin} alt="Brin" />
                <GridDesc>
                    <h2>Brin</h2>
                    <BoldText>bass / vocals</BoldText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit varius neque vitae posuere. Sed tellus turpis, dapibus at venenatis nec, ornare sit amet neque. Duis et rhoncus augue. Fusce consectetur ante eu lorem rhoncus</p>
                </GridDesc>
            </GridItem>
            <GridItem>
                <img src={trav} alt="Brin" />
                <GridDesc>
                    <h2>Trav</h2>
                    <BoldText>guitar / vocals</BoldText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit varius neque vitae posuere. Sed tellus turpis, dapibus at venenatis nec, ornare sit amet neque. Duis et rhoncus augue. Fusce consectetur ante eu lorem rhoncus</p>
                </GridDesc>
            </GridItem>
        </FlexSpaceBetween>
        {/* <FlexCentered>
            <GridItem>
                <img src={devon} alt="Brin" />
                <GridDesc>
                    <h2>Devon</h2>
                    <BoldText>drums / vocals</BoldText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit varius neque vitae posuere. Sed tellus turpis, dapibus at venenatis nec, ornare sit amet neque. Duis et rhoncus augue. Fusce consectetur ante eu lorem rhoncus</p>
                </GridDesc>
            </GridItem>
        </FlexCentered> */}
    </GridWrapper>
)
  
export default AboutGrid