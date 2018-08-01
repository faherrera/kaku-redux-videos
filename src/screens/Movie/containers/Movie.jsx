import React from 'react';
import { List } from '../components/List';
import { GeneralLayout } from '../../../layouts/General/containers/GeneralLayout';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAllMovies} from '../../../redux/actions/movies';

class Movie extends React.Component {
  componentDidMount() {
    // this.getAllMovies();  
  }

  getAllMovies = () => {
    this.props.actions.fetchAllMovies();
  }

  render(){
    let {data,loading,error} = this.props;
    return(
      <GeneralLayout loading={loading}>
        
        <h1> Movies </h1>
        <List
          data={
            data
          }
        />
      </GeneralLayout>
    )

  }
}

const mapToStateProps = (state,props) => {

  return{
    data:state.movies.data,
    loading: state.movies.loading,
    error: state.movies.error
  }

};

const mapDispatchToProps = (dispatch) => {
  return{
    actions: bindActionCreators({fetchAllMovies},dispatch)
  }
};

export default connect(mapToStateProps,mapDispatchToProps)(Movie);