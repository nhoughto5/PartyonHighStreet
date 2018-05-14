import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const VideoWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem 8rem;
    text-align: center;
`

const Video = styled.div`
    margin: 2rem 0;
`

const ResponsiveWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 35px;
    height: 0;
    overflow: hidden;
    margin: 0 auto;

    iframe {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const Videos = () => (
    <VideoWrapper>
        <h2>Videos</h2>
        <Video>
            <ResponsiveWrapper>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/v12XozVLo_E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </ResponsiveWrapper>
        </Video>
        <Video>
            <ResponsiveWrapper>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hzYHoVhG0Ww" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </ResponsiveWrapper>
        </Video>
        <Video>
            <ResponsiveWrapper>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZSc1TCSABIU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </ResponsiveWrapper>
        </Video>
    </VideoWrapper>
)
  
export default Videos