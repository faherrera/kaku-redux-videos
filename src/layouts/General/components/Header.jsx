import React from 'react'
import {Link} from 'react-router-dom';

import './Header.css';

const Header = (props) => {
  return(
    <header className="header-general" ref={props.setRef}>
      <nav className="nav-general" >
        <div className="nav-general__brand-logo">
          <Link to={"/"} style={{color:"white"}}>
            Kaku Video
          </Link>
        </div>
        <ul className="nav-general__menu">
          <li> 
          <Link to={"/movies/"} style={{color:"white"}}>
            Peliculas
          </Link>
          </li>
          <li> Series</li>
          <li> Documentales</li>
          <li> Contacto </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;