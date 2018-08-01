import React from 'react';
import {Link} from 'react-router-dom';
///assets
import './MovieItem.css';

const MovieItem = (props) => {
  let {id,title_long,large_cover_image} = props;
  return(
    <Link className="movie-item"  to={`/movies/${id || 94}`}>
      <span className="movie-item__title">
        {title_long}
      </span>
      <img src={large_cover_image} className="movie-item__img" alt={"Imagen de la pelicula"}/>
    </Link>
  )
}
export {MovieItem};
