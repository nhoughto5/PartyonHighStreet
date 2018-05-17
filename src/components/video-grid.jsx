import React from 'react';
import styled from "styled-components";

const VideoGridWrap = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 7rem auto;
`;

const VideoFlexGridTwo = styled.div`
  display: flex;

  justify-content: space-between;
`;

const VideoFlexGridItem = styled.div`
  width: 48%;
`;

const ResponsiveWrap = styled.div`
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;

  iframe {
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
  }
`

const VideoGrid = () => (
    <VideoGridWrap>
      <VideoFlexGridTwo>
        <VideoFlexGridItem>
          <ResponsiveWrap>
            <iframe src="https://www.youtube.com/embed/v12XozVLo_E" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </ResponsiveWrap>
        </VideoFlexGridItem>
        <VideoFlexGridItem>
          <ResponsiveWrap>
            <iframe src="https://www.youtube.com/embed/v12XozVLo_E" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </ResponsiveWrap>
        </VideoFlexGridItem>
      </VideoFlexGridTwo>
    </VideoGridWrap>
);

export default VideoGrid;