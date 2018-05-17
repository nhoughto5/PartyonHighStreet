import React from 'react';
import styled from "styled-components";
import VideoGridItem from "./video-grid-item";
import {TweenMax} from 'gsap';

const VideoGridWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 3rem auto;
`;

const VideoFlexGridTwo = styled.div`
  display: flex;
  justify-content: space-between;
`;

class VideoGrid extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    let videos = document.querySelectorAll("iframe");
    let loadedCount = 0;
    
    for(let i = 0; i < videos.length; ++i){
      videos[i].addEventListener("onYouTubeIframeAPIReady", function(){
        console.log(`Video ${i} loaded`)
        loadedCount++;
        if(loadedCount === videos.length) TweenMax.fromTo(videos[i], 3, {}, {opacity: 1});
      })
    }
  }

  render(){
    return (
        <VideoGridWrap>
          <VideoFlexGridTwo>
            <VideoGridItem srcURL="https://www.youtube.com/embed/v12XozVLo_E"></VideoGridItem>
            <VideoGridItem srcURL="https://www.youtube.com/embed/hzYHoVhG0Ww"></VideoGridItem>
          </VideoFlexGridTwo>
          <br/>
          <hr/>
          <br/>
          <VideoFlexGridTwo>
            <VideoGridItem srcURL="https://www.youtube.com/embed/pLJYc-Z2K30"></VideoGridItem>
            <VideoGridItem srcURL="https://www.youtube.com/embed/J2bVmCaNfYA"></VideoGridItem>
          </VideoFlexGridTwo>
          <br/>
          <hr/>
          <br/>
          <VideoFlexGridTwo>
            <VideoGridItem srcURL="https://www.youtube.com/embed/ZqZRTUR-QL0"></VideoGridItem>
            <VideoGridItem srcURL="https://www.youtube.com/embed/ZqZRTUR-QL0"></VideoGridItem>
          </VideoFlexGridTwo>
        </VideoGridWrap>
    );
  } 

}

export default VideoGrid;