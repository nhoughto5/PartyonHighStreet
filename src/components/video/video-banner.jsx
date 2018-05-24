import React from 'react';
import styled from "styled-components";
import BannerAnim from '../../classes/VideoBanner';
const CanvasBanner = styled.div`
    background-color: white;
    width: 100%;
    height: 35rem;
`;

class VideoBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.bannerAnim = new BannerAnim();
  }

  render(){
    return (
        <CanvasBanner id={`videoBannerContainer`}>
        </CanvasBanner>
    );
  }
}

export default VideoBanner;