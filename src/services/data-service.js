import movieService from "./movie-service";

const apiMapCallback = next => (service, serviceFn, payload, action) => {
  return service[serviceFn](payload).then((data) => {
    if (payload && payload.cb) {
      payload.cb(data, undefined);
    }
    next({
      type: `${action}_SUCCESS`,
      payload: data
    });
  }).catch((err) => {
    if (payload && payload.cb) {
      payload.cb(undefined, err);
    }
    next({
      type: `${action}_ERROR`,
      err
    });
  });
}

const dataService = store => next => action => {
  next(action);
  const getApi = apiMapCallback(next);
  var queryString = Object.keys(action.searchParams || {}).map(key => key + "=" + action.searchParams[key]).join("&");
  switch (action.type) {
    case 'SEARCH_MOVIES': {
      let currState = store.getState();
      let searchTerm = action.term || currState.moviesData.searchTerm;
      let payload = {searchTerm, queryString, cb: action.cb};
      getApi(movieService, "searchMovies", payload, "SEARCH_MOVIES");
      break;
    }
    case 'GET_NOW_PLAYING': {
      let payload = {filter: action.movieFilter, queryString};
      getApi(movieService, "getNowPlaying", payload, "GET_MOVIES");
      break;
    }
    case 'GET_POPULAR': {
      let payload = {filter: action.movieFilter, queryString};
      getApi(movieService, "getPopular", payload, "GET_MOVIES");
      break;
    }
    case 'GET_TOP_RATED': {
      let payload = {filter: action.movieFilter, queryString};
      getApi(movieService, "getTopRated", payload, "GET_MOVIES");
      break;
    }
    case 'GET_MOVIE_DETAILS': {
      let payload = {movieId: action.movieId, cb: action.cb};
      getApi(movieService, "getMovieDetails", payload, "GET_MOVIE_DETAILS");
      break;
    }
    default:
      break;
  }
};

export default dataService
