import { GET_ALL_MOVIES } from "../actions/action-types";
import {API,ENDPOINTS} from './../../services/config';
import { MoviesService } from "../../services/MoviesService";
import { MoviesData } from "../../staticAPI";

const initialState = {
  movies: [],
  loading:false,
  error:false,
};


const movies = (state = initialState,action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      console.log('====================================');
      console.log("Este es el action type",action.type);
      console.log('====================================');
      return {
        ...state,
        movies: MoviesData
      }
      break;
  
    default:
      return state
      break;
  }
}

export default movies;