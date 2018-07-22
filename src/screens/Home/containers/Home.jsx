import React from 'react';
import { GeneralLayout } from '../../../layouts/General/containers/GeneralLayout';
import { HeroMovie } from '../components/HeroMovie';
import { SectionMovies } from '../components/SectionMovies';

const Home = (props) => {
  return(
    <GeneralLayout>
      <HeroMovie/>

      <SectionMovies
        title="Preferenciales"
      />
      <SectionMovies
        title="Más vistas"
      />
    </GeneralLayout>
  )
}

export {Home};