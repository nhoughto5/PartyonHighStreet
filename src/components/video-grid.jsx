import React from 'react';
import styled from "styled-components";

const VideoGridWrap = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 7rem auto;
`;

const VideoFlexGridTwo = styled.div`
  justify-content: space-between;
`;

const VideoFlexGridItem = styled.div`
    width: 48%;

    img {
        min-height: 300px;
        min-width: 100%;

        width: 100%;
        height: 300px;

        object-fit: cover;
        object-position: 0 0;
    }
`;

const VideoGrid = () => (
    <VideoGridWrap>
      <VideoFlexGridTwo>
        <VideoFlexGridItem>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/v12XozVLo_E" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </VideoFlexGridItem>
      </VideoFlexGridTwo>
      <VideoFlexGridTwo>
        <VideoFlexGridItem>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/v12XozVLo_E" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </VideoFlexGridItem>
      </VideoFlexGridTwo>
    </VideoGridWrap>
);

export default VideoGrid;