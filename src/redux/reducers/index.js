import movies from './movies';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  movies, //creo un objeto del tipo movies:movies.
})

export default rootReducer;