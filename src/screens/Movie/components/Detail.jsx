import React from 'react';

import './Detail.css';
import { MovieCard } from './Card';

const Detail = (props) => {
  return(
    <div className="movie-detail">
      <MovieCard
        {...props}
      />
    </div>
  )
}

export {Detail};
