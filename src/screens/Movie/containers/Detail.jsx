import React from 'react';
import { GeneralLayout } from '../../../layouts/General/containers/GeneralLayout';
import { Detail } from '../components/Detail';
import { MoviesService } from '../../../services/MoviesService';

class MovieDetail extends React.Component{

  state = {
    loading:true,
    movie:{}
  }

  componentDidMount() {
    this.findFromId();
  }

  findFromId(){
    let {params} = this.props.match;

    if (params.id) {
      return this.getMovie(params.id);
    }
    alert("No es correcto su Id")
  }

  getMovie(id){
    MoviesService.getById(id)
    .then(
      res => this.setState({
        movie:res,
        loading:false,
      })
    )
    .catch()
  }

  render(){
    return(
      <GeneralLayout>
        {
          !this.state.loading
          ? 
          <Detail
              {...this.state.movie}
          />
          :
          <strong> Cargando ...</strong> 
        }
        
      </GeneralLayout>
    )
  }
}

export default MovieDetail;
