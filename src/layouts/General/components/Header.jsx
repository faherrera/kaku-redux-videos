import React from 'react'

import './Header.css';

const Header = (props) => {
  return(
    <header className="header-general" ref={props.setRef}>
      <nav className="nav-general" >
        <div className="nav-general__brand-logo">
          Kaku Video
        </div>
        <ul className="nav-general__menu">
          <li> Peliculas</li>
          <li> Series</li>
          <li> Documentales</li>
          <li> Contacto </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;