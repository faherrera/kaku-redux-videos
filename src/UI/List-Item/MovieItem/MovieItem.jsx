import React from 'react';
import {Link} from 'react-router-dom';
///assets
import './MovieItem.css';

const MovieItem = (props) => {
  let {title,image} = props;

  return(
    <a className="movie-item"  href={props.link || "/"}>
      <span className="movie-item__title">
        {title}
      </span>
      <img src={image} className="movie-item__img" alt={"Imagen de la pelicula"}/>
    </a>
  )
}
export {MovieItem};
