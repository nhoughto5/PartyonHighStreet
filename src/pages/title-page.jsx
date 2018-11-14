import React from 'react';
import styled from 'styled-components';
import TitleAnimation from '../classes/title-sprite';
import travisPose from '../images/travisPose.png';

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

  .left{
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .right {
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

class TitlePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.anim = new TitleAnimation();
  }

  render() {
    return (
      <div>
        <AnimationDiv className={this.props.classes}>
          <div id="right" className="right"/>
          <div className="centered">
              <canvas className="spriteCanvas" id="spriteCanvasBrin" />
          </div>
          <div id="left" className="left"/>
        </AnimationDiv>
      </div>
    );
  }
}

export default TitlePage;
