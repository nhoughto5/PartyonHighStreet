import React from 'react';
import styled from "styled-components";
import TitleAnimation from './animations/title-sprite';

const AnimationDiv = styled.div`
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    overflow: hidden;
    background-color:white;

    transition: all 3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class TitlePage extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.anim = new TitleAnimation();
    }

    render(){
        return (
            <AnimationDiv className={this.props.classes}>
                <canvas className="spriteCanvas" id="spriteCanvas"/>
                {/* <div className="titleBackground"></div> */}
            </AnimationDiv>
        );
    }
}

export default TitlePage;