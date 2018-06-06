import React from 'react';
import Link from 'gatsby-link';
import { storage } from 'react-easy-params'
import HomePage from '../components/home-page';
import TitlePage from '../components/title-page';
import { timer } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      classes: '',
      showHome: false,
      isFirstVisit: this.isFirstVisit
    };
  }

  get isFirstVisit() {
    return sessionStorage.getItem('shownTitle') == null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.isFirstVisit;
  }

  componentDidMount() {
    if(this.isFirstVisit){
      console.log("dhsdfh");
      timer(4000).pipe(
        tap((x) => this.setState({
          classes: 'title-animation-div animationFade',
          showHome: true,
        })),
        delay(3000),
      ).subscribe(
        () => {
          sessionStorage.setItem('shownTitle', true)
          this.setState({ 
            classes: 'title-animation-div animationFade title-no-show',
            isFirstVisit: this.isFirstVisit,
          })
        }
      );
    }
  }
  
  render() {
    console.log(this.state.classes);
    return (
      <div>
        {this.isFirstVisit && <TitlePage classes={this.state.classes} />}
        {this.isFirstVisit && this.state.showHome && <HomePage/>}
        {!this.isFirstVisit && <HomePage/>}
      </div>
    );
  }
}

export default IndexPage;
