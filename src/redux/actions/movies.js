
import { GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_LOADING, GET_ALL_MOVIES_ERROR } from "./action-types";
import { MoviesService } from "../../services/MoviesService";

const getAllMoviesSuccess = ( data = []) => {

  return {
    type:GET_ALL_MOVIES_SUCCESS,
    payload:{
      data,
      loading:false,
      error:false
    }
  } 
}

const getAllMoviesLoading = () => {

  return {
    type: GET_ALL_MOVIES_LOADING,
    payload:{
      loading:true,
      error:false,
    }
  }
}

const getAllMoviesError = () => {

  return {
    type: GET_ALL_MOVIES_ERROR,
    payload:{
      loading:false,
      error:true,
    }
  }
}

const fetchAllMovies = () => {
  return dispatch => {
    dispatch(getAllMoviesLoading());
    MoviesService.getAll()
    .then(
      res => {
        console.log('====================================');
        console.log("Esta es la devolución que tengo",res);
        console.log('====================================');
        dispatch(getAllMoviesSuccess(res))
      }
    )
    .catch(err => {
      dispatch(getAllMoviesError())
    })
  }
}
export {
  fetchAllMovies,
  getAllMoviesSuccess,
  getAllMoviesLoading,
  getAllMoviesError
}