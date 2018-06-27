import React from 'react';
import styled from "styled-components";
import BannerAnim from '../../classes/VideoBanner';
const CanvasBanner = styled.div`
    margin: 0 2rem;
    height: 35rem;
    max-height: 35rem;
    overflow: hidden;
    background-color:#171754;
    background-image:
      radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 20px),
      radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 10px),
      radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 20px),
      radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
      background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px; 
      background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
`;

class BrinDiveAnim extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.bannerAnim = new BannerAnim();
    }

    render() {
        return (
            <CanvasBanner id={`videoBannerContainer`}>
            </CanvasBanner>
        );
    }
}

export default BrinDiveAnim;