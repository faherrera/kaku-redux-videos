import React from 'react';
import Header from './../components/Header';
import { Footer } from '../components/Footer';

const GeneralLayout = (props) => {
  return(
    <div className="general-wrapper">
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}

export {GeneralLayout};
