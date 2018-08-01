import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import {Provider} from 'react-redux';

import store from './redux/store';
import { fetchAllMovies } from './redux/actions/movies';

store.dispatch(fetchAllMovies()); //Llamo de entrada a todas las peliculas.
 
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
