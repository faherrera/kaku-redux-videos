import React from 'react'
import { HorizontalMovie } from '../../../UI/List/Horizontal-Movie/HorizontalMovie';
import PropTypes from 'prop-types';

const SectionMovies = (props) => {
  let {data} = props;
  return(
    <section className="section-movies">
      <h3> {props.title} </h3>
      <HorizontalMovie 
        data={data}
      />
    </section>
  )
}

SectionMovies.propTypes = {
  title: PropTypes.string.isRequired,
  data:PropTypes.any //
}

export {SectionMovies};