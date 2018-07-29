import React from 'react';
import { GeneralLayout } from '../../../layouts/General/containers/GeneralLayout';
import { HeroMovie } from '../components/HeroMovie';
import { SectionMovies } from '../components/SectionMovies';
import {connect} from 'react-redux';


const Home = (props) => {
  let {data} = props;
  return(
    <GeneralLayout>
      <HeroMovie/>

      <SectionMovies
        title="Preferenciales"
        data={data.movies}
      />
      <SectionMovies
        title="Más vistas"
      />
    </GeneralLayout>
  )
}

const mapStateToProps = (state,props) => {
  console.log('====================================');
  console.log("Esto es lo que recibo de state",state);
  console.log('====================================');

  return{
    data:state.movies,
  }
}
export default connect(mapStateToProps)(Home);