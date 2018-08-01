import React from 'react';
import { GeneralLayout } from '../../../layouts/General/containers/GeneralLayout';
import { HeroMovie } from '../components/HeroMovie';
import { SectionMovies } from '../components/SectionMovies';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';


const Home = (props) => {
  let {data,loading,error} = props;

  return(
    <GeneralLayout loading={loading}>
      <HeroMovie/>

      <SectionMovies
        title="Preferenciales"
        data={data}
      />
      <SectionMovies
        title="Más vistas"
      />
    </GeneralLayout>
  )
}

const mapStateToProps = (state,props) => {


  return{
    data : state.movies.data,
    loading: state.movies.loading,
    error: state.movies.error,
    // loading: state.get('movies').get('loading'),
    // error: state.get('movies').get('error')
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    // actions : bindActionCreators({getAllMoviesDispatch},dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);