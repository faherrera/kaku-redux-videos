import React from 'react';
import Header from './../components/Header';
import { Footer } from '../components/Footer';

import './GeneralLayout.css';


class GeneralLayout extends React.Component {

  componentDidMount() {
    this.toggleFixNav();  
  }

  componentWillUnmount() {
    this.toggleFixNav();
  }
  
  toggleFixNav(){
    this.nav.classList.toggle("nav-fixed");
    console.log('====================================');
    console.log("Resultado del nav",this.nav);
    console.log('====================================');
  }
  handleRef= (element) => {
    this.nav = element;

  }

  render(){
    return(
      <div className="general-wrapper">
        <Header setRef={this.handleRef} />
        <div className="general-content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export {GeneralLayout};
