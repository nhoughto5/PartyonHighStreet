import React from 'react';
import styled from "styled-components";

const CanvasBanner = styled.div`
    background-color: #d2e0f7;
    width: 100%;
    height: 35rem;
`

const VideoBanner = () => (
    <CanvasBanner id="videoCanvas"/>
);

export default VideoBanner;