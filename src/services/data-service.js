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
        params: payload.params,
        initiator: payload.initiator
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
        params: payload.params,
        initiator: payload.initiator
      }
    });
  });
}

function compareObjsProps(obj1 = {}, obj2 = {}) {
  var o1Keys = Object.keys(obj1);
  var o2Keys = Object.keys(obj2);
  
  return o1Keys.length === o2Keys.length && o1Keys.every(key => o2Keys.includes(key) && obj1[key] === obj2[key]);
}

function shouldFetchMovies(state, initiator, params) {
  var currResults = state.moviesData.searchResults[initiator]
  if (!currResults || currResults.isInvalid || !compareObjsProps(params, currResults.searchParams)) {
    // fetch movies if there are no results for that initiator, if results are invalid, or if params are different
    return true;
  }
  return false;
}

const dataService = store => next => action => {
  next(action);
  const getApi = apiMapCallback(next);
  var params = action.searchParams || {};
  let currState = store.getState();
  var initiator = action.initiator;
  switch (action.type) {
    case 'SEARCH_MOVIES': {
      let searchTerm = action.term;
      let payload = {searchTerm, params, initiator, cb: action.cb};
      if (shouldFetchMovies(currState, initiator, params)) {
        getApi(movieService, "searchMovies", payload, action.type);
      }
      else {
        next({
          type: `${action}_SUCCESS`,
          payload: currState.moviesData.searchResults[initiator],
          query: {
            params,
            initiator
          }
        })
      }
      break;
    }
    case 'GET_NOW_PLAYING': {
      let payload = {params, initiator, cb: action.cb};
      getApi(movieService, "getNowPlaying", payload, "GET_MOVIES");
      break;
    }
    case 'GET_POPULAR': {
      let payload = {filter: action.movieFilter, params, initiator, cb: action.cb};
      getApi(movieService, "getPopular", payload, "GET_MOVIES");
      break;
    }
    case 'GET_TOP_RATED': {
      let payload = {filter: action.movieFilter, params, initiator, cb: action.cb};
      getApi(movieService, "getTopRated", payload, "GET_MOVIES");
      break;
    }
    case 'GET_MOVIE_DETAILS': {
      let payload = {movieId: action.movieId, initiator, cb: action.cb};
      getApi(movieService, "getMovieDetails", payload, action.type);
      break;
    }
    case 'GET_MOVIES_FOR_GENRE': {
      let payload = {genreId: action.genreId, genreName: action.genreName, params, initiator, cb: action.cb};
      getApi(movieService, "getMoviesForGenre", payload, action.type);
      break;
    }
    default:
      break;
  }
};

export default dataService
