import React from 'react';

import './Card.css';

const MovieCard = (movie) => {
  let {title_long,description_full,large_cover_image} = movie;
  return(
    <div className="movie-card">
      <h1 className="movie-card__title">{title_long}</h1>
      <figure className="movie-card__cover">
        <img src={large_cover_image} alt="Smal" />
      </figure>
      <p className="movie-card__description">
        {description_full}
      </p>
    </div>
  )
}
export {MovieCard}