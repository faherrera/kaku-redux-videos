import React from 'react';
import { MovieItem } from '../../../UI/List-Item/MovieItem/MovieItem';

import './List.css';

const List = (props) => {
  let data = props.data || [];

  return(
    <section className="movie-list-all">
      {
        data.length > 0
        ?
        data.map(
          (item,index) => (
            <section key={index} className="movie-list-all__item">
              <MovieItem
                {...item}
              />
            </section>
          )
        )
        :
        <h3> NO TENGO DATOS </h3>
      }
    </section>
  )
}

export {List};