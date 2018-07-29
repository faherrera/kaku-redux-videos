import axios from 'axios';

const BASE_URL = "https://yts.am/api/v2/";

const ENDPOINTS = {
  LIST_MOVIES: "list_movies.json",
  MOVIE_DETAIL: "movie_details.json?movie_id="
}

const API = axios.create({
  baseURL:BASE_URL,
})

export{
  API,
  ENDPOINTS
};

