import React from 'react';
import styled from 'styled-components';

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
`;

const VideoGridItem = ({ srcURL }) => (
    <VideoFlexGridItem>
        <ResponsiveWrap>
          <iframe src={srcURL} frameBorder="0" allowFullScreen></iframe>
        </ResponsiveWrap>
    </VideoFlexGridItem>
);

export default VideoGridItem;

