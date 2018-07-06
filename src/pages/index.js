import React from 'react';
import HomePage from '../components/home-page';
import TitlePage from '../components/title-page';
import Utility from '../classes/Utility';
import { timer } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      classes: '',
      showHome: false,
    };
  }

  get isFirstVisit() {
    if(typeof sessionStorage !== 'undefined'){
      return sessionStorage.getItem('shownTitle') == null;
    }else {
      return false;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isFirstVisit == true || this.isFirstVisit == true;
  }

  componentDidMount() {
    this.isMobile = Utility.isMobile();
    if(true){
      timer(4000).pipe(
        tap((x) => this.setState({
          classes: 'title-animation-div animationFade',
          showHome: true,
          shouldRenderTitle: true,
        })),
        delay(3000),
      ).subscribe(
        () => {
          console.log("No Show");
          this.setState({
            classes: 'title-no-show title-animation-div animationFade',
            shouldRenderTitle: false,
          });
          this.forceUpdate();
          sessionStorage.setItem('shownTitle', true);
          this.setState({ 
            isFirstVisit: this.isFirstVisit,
          });
        }
      );
    }
  }
  
  render() {
    return (
      <div>
        {!this.isMobile && this.isFirstVisit && <TitlePage classes={this.state.classes} shouldRender={this.state.shouldRenderTitle} />}
        {!this.isMobile && this.isFirstVisit && this.state.showHome && <HomePage/>}
        {!this.isFirstVisit && <HomePage/>}
      </div>
    );
  }
}

export default IndexPage;
