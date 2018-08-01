import React from 'react'

import './HorizontalMovie.css';
import { MovieItem } from '../../List-Item/MovieItem/MovieItem';
import { List } from 'immutable';

const HorizontalMovie = (props) => {
  let data = props.data || [];
  // data = data ? data.toJS() : [];
  
  return(
    <ul className="horizontal-movie">
      {
        data.length > 0
        ?
        data.map((item,index) =>(
          <li key={index}  className="horizontal-movie-item">
            <MovieItem
              {...item}
            />
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