import axios from 'axios';
import { setSearchTerm } from '../actions';
let movieAPIKey = "89835e8482c6060a7265d6ebd1e42cb4";
let apiEndpoint = "https://api.themoviedb.org/3";
const getApiGenerator = next => (route, name, cb, params) => {
  return axios.get(route + `&_=${Date.now()}`).then((response) => {
    const data = response.data;
    next({
      type: `${name}_SUCCESS`,
      payload: data
    });
    if (cb) {
      cb(data, undefined);
    }
  }).catch((err) => {
    next({
      type: `${name}_ERROR`,
      err
    });
    if (cb) {
      cb(undefined, err);
    }
  });
};

const dataService = store => next => action => {
  next(action);
  const getApi = getApiGenerator(next);
  var queryString = Object.keys(action.searchParams || {}).map(key => key + "=" + action.searchParams[key]).join("&");
  switch (action.type) {
    case 'SEARCH_MOVIES': {
      var currState = store.getState();
      var searchTerm = (action.searchParams || {}).term || currState.moviesData.searchTerm;
      next(setSearchTerm(searchTerm));
      delete action.searchParams["term"];
      getApi(`${apiEndpoint}/search/movie?api_key=${movieAPIKey}&query=${searchTerm}&${queryString}`, action.type, action.cb);
      break;
    }
    case 'GET_NOW_PLAYING':
      getApi(`${apiEndpoint}/movie/now_playing?api_key=${movieAPIKey}&language=en-US&${queryString}`, "GET_MOVIES", action.cb);
      break;
    case 'GET_POPULAR':
      getApi(`${apiEndpoint}/movie/popular?api_key=${movieAPIKey}&language=en-US&${queryString}`, "GET_MOVIES", action.cb);
      break;
    case 'GET_TOP_RATED':
      getApi(`${apiEndpoint}/movie/top_rated?api_key=${movieAPIKey}&language=en-US&${queryString}`, "GET_MOVIES", action.cb);
      break;
    case 'GET_MOVIE_DETAILS':
      getApi(`${apiEndpoint}/movie/${action.movieId}?api_key=${movieAPIKey}&language=en-US`, action.type, action.cb);
      break;
    default:
      break;
  }
};

export default dataService
