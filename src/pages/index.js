import React from 'react';
import Link from 'gatsby-link';
import HomePage from '../components/home-page';
import TitlePage from '../components/title-page';
class IndexPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      classes: '',
      showHome: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        classes: 'animationFade',
        showHome: true
      })
    }, 4000)
  }
  
  render(){
    const isTitlePage = this.state.isTitlePage;
    const content = isTitlePage ? (<TitlePage/>) : (<HomePage/>);
    return (
      // <div>{content}</div>
      <div>
        <TitlePage classes={this.state.classes} />
        {this.state.showHome && <HomePage/>}
      </div>

    );
  }
}

export default IndexPage;
