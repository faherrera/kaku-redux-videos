import React from 'react'

import './HorizontalMovie.css';
import { MovieItem } from '../../List-Item/MovieItem/MovieItem';

const HorizontalMovie = (props) => {
  let data = props.data || [];
  return(
    <ul className="horizontal-movie">
      {
        data.length > 0
        ?
        data.map((item,index) =>(
          <li key={index}  className="horizontal-movie-item">
            <MovieItem {...item} />
          </li>
        ))
        : 
        <li>
          <strong>
            No hay datos cargados aún
          </strong>
        </li>
      }
    </ul>
  )
}

export {HorizontalMovie};