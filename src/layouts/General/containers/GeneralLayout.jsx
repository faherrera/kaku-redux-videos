import React from 'react';
import Header from './../components/Header';
import { Footer } from '../components/Footer';

import './GeneralLayout.css';
import 'normalize.css';


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

        {
          this.props.loading == true
          ? <div className="general-content"> <h1>Cargando ...</h1></div>
          :
          <div className="general-content">
            {this.props.children}
          </div>
        }
        <Footer />
      </div>
    )
  }
}

export {GeneralLayout};
