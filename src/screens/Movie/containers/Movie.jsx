import React from 'react';
import { MovieItem } from '../../../UI/List-Item/MovieItem/MovieItem';
import { List } from '../components/List';
import { MoviesService } from '../../../services/MoviesService';
import { GeneralLayout } from '../../../layouts/General/containers/GeneralLayout';
import { MoviesData } from '../../../staticAPI';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllMoviesDispatch} from '../../../redux/actions/movies';

class Movie extends React.Component {
  componentDidMount() {
    this.getAllMovies();  
  }

  getAllMovies = () => {
    this.props.actions.getAllMoviesDispatch();
  }

  render(){
    return(
      <GeneralLayout>
        
        <h1> Movies </h1>
        <List
          data={
            this.props.data.movies
          }
        />
      </GeneralLayout>
    )

  }
}

const mapToStateProps = (state,props) => {

  return{
    data:state.movies,
  }

};

const mapDispatchToProps = (dispatch) => {
  return{
    actions: bindActionCreators({getAllMoviesDispatch},dispatch)
  }
};

export default connect(mapToStateProps,mapDispatchToProps)(Movie);