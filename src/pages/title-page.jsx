import React from 'react';
import styled from 'styled-components';
import TitleAnimation from '../classes/title-sprite';

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

    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
            <AnimationDiv className={this.props.classes}>
                <div className="centered">
                    <canvas className="spriteCanvas" id="spriteCanvas" />
                </div>
            </AnimationDiv>
    );
  }
}

export default TitlePage;
