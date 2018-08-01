import {API,ENDPOINTS} from './config';

const MoviesService = {

  getAll: () =>new Promise((resolve, reject) => {
    API.get(ENDPOINTS.LIST_MOVIES)
    .then(
      res => resolve(res.data.data.movies)
    )
    .catch(
      err => reject(err.response || {data:"Ocurrió un error en el servidor, intente nuevamente más tarde por favor."})
    )
  }),
  getById: (id) =>new Promise((resolve, reject) => {
    API.get(ENDPOINTS.MOVIE_DETAIL+id)
    .then(
      res => resolve(res.data.data.movie)
    )
    .catch(
      err => reject(err.response || {data:"Ocurrió un error en el servidor, intente nuevamente más tarde por favor."})
    )
  })
  
};


export {MoviesService};