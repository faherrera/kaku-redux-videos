import { GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_LOADING, GET_ALL_MOVIES_ERROR } from "../actions/action-types";
// import {API,ENDPOINTS} from './../../services/config';
// import { MoviesService } from "../../services/MoviesService";
import { MoviesData } from "../../staticAPI";
import { fromJS, List } from "immutable";

const initialState = {
  data: [],
  loading:false,
  error:false,
};


const movies = (state = initialState,action) => {
  switch (action.type) {
    case GET_ALL_MOVIES_SUCCESS:
      return action.payload;
    
      break;
    case GET_ALL_MOVIES_LOADING:
      return Object.assign(state,action.payload)
      break;
    case GET_ALL_MOVIES_ERROR:
      return Object.assign(state,action.payload)
      break;
  
    default:
      return state
      break;
  }
}

export default movies;