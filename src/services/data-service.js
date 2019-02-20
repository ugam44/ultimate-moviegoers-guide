import movieService from "./movie-service";

const apiMapCallback = next => (service, serviceFn, payload, action) => {
  return service[serviceFn](payload).then((data) => {
    if (payload && payload.cb) {
      payload.cb(data, undefined);
    }
    next({
      type: `${action}_SUCCESS`,
      payload: data,
      // pass query data so we can save to app state to re execute if necessary
      query: {
        service,
        serviceFn,
        payload,
        action
      }
    });
  }).catch((err) => {
    if (payload && payload.cb) {
      payload.cb(undefined, err);
    }
    next({
      type: `${action}_ERROR`,
      err,
      // pass query data so we can save to app to re execute if necessary
      query: {
        service,
        serviceFn,
        payload,
        action
      }
    });
  });
}

const dataService = store => next => action => {
  next(action);
  const getApi = apiMapCallback(next);
  var params = action.searchParams || {};
  switch (action.type) {
    case 'SEARCH_MOVIES': {
      let searchTerm = action.term;
      let payload = {searchTerm, params, cb: action.cb};
      getApi(movieService, "searchMovies", payload, action.type);
      break;
    }
    case 'GET_PAGE': {
      let currState = store.getState();
      // get latest query information
      let {service, serviceFn, payload, action: actionType} = currState.moviesData.currentQuery;
      // update page
      payload.params.page = action.page;
      // re execute last query with updated page (ensures all other parameters are the same, generically)
      getApi(service, serviceFn, payload, actionType);
      break;
    }
    case 'GET_NOW_PLAYING': {
      let payload = {filter: action.movieFilter, params, cb: action.cb};
      getApi(movieService, "getNowPlaying", payload, "GET_MOVIES");
      break;
    }
    case 'GET_POPULAR': {
      let payload = {filter: action.movieFilter, params, cb: action.cb};
      getApi(movieService, "getPopular", payload, "GET_MOVIES");
      break;
    }
    case 'GET_TOP_RATED': {
      let payload = {filter: action.movieFilter, params, cb: action.cb};
      getApi(movieService, "getTopRated", payload, "GET_MOVIES");
      break;
    }
    case 'GET_MOVIE_DETAILS': {
      let payload = {movieId: action.movieId, cb: action.cb};
      getApi(movieService, "getMovieDetails", payload, action.type);
      break;
    }
    case 'GET_MOVIES_FOR_GENRE': {
      let payload = {genreId: action.genreId, genreName: action.genreName, params, cb: action.cb};
      getApi(movieService, "getMoviesForGenre", payload, action.type);
      break;
    }
    default:
      break;
  }
};

export default dataService
