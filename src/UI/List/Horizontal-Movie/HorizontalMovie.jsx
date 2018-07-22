import React from 'react'

import './HorizontalMovie.css';
import { MovieItem } from '../../List-Item/MovieItem/MovieItem';

const HorizontalMovie = (props) => {
  let data = props.data || [
    {
      title:"De caza con papá",
      image: "https://image.tmdb.org/t/p/w342/5vWVTg8Gj5pKrNPnMPMC6tlKiBK.jpg",
    },
    {
      title:"Muerte de superman",
      image: "https://image.tmdb.org/t/p/w342/y0uxSHaSFmt6XaBJgjkeLqe7aM.jpg",
    },
    {
      title:"Proyecto Rampage",
      image: "https://image.tmdb.org/t/p/w342/luFovbjNnQ1xNNtcEl3dpE2oz0P.jpg",
    },
    {
      title:"Proyecto Rampage",
      image: "https://image.tmdb.org/t/p/w342/luFovbjNnQ1xNNtcEl3dpE2oz0P.jpg",
    },
    {
      title:"De caza con papá",
      image: "https://image.tmdb.org/t/p/w342/5vWVTg8Gj5pKrNPnMPMC6tlKiBK.jpg",
    },
    {
      title:"Muerte de superman",
      image: "https://image.tmdb.org/t/p/w342/y0uxSHaSFmt6XaBJgjkeLqe7aM.jpg",
    },
    {
      title:"Proyecto Rampage",
      image: "https://image.tmdb.org/t/p/w342/luFovbjNnQ1xNNtcEl3dpE2oz0P.jpg",
    },
    {
      title:"Proyecto Rampage",
      image: "https://image.tmdb.org/t/p/w342/luFovbjNnQ1xNNtcEl3dpE2oz0P.jpg",
    },
    {
      title:"Proyecto Rampage",
      image: "https://image.tmdb.org/t/p/w342/luFovbjNnQ1xNNtcEl3dpE2oz0P.jpg",
    },
  ]
  return(
    <ul className="horizontal-movie">
      {
        data.map((item,index) =>(
          <li key={index}  className="horizontal-movie-item">
            <MovieItem {...item} />
          </li>
        ))
      }
    </ul>
  )
}

export {HorizontalMovie};