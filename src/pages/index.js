import React from 'react';
import Link from 'gatsby-link';
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
    };
  }

  componentDidMount() {
    timer(4000).pipe(
      tap((x) => this.setState({
        classes: 'title-animation-div animationFade',
        showHome: true
      })),
      delay(3000)
    ).subscribe(
      () => this.setState({ classes: 'title-animation-div animationFade title-no-show' })
    );
  }
  
  render() {
    return (
      <div>
        <TitlePage classes={this.state.classes} />
        {this.state.showHome && <HomePage/>}
      </div>
    );
  }
}

export default IndexPage;
