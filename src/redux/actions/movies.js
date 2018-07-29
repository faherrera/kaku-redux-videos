import { GET_ALL_MOVIES } from "./action-types";

const getAllMoviesDispatch = () => {
  return {
    type:GET_ALL_MOVIES
  } 
}

export {
  getAllMoviesDispatch
}