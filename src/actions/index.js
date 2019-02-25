export let SEARCH_MOVIES = "SEARCH_MOVIES";
export let GET_NOW_PLAYING = "GET_NOW_PLAYING";
export let GET_POPULAR = "GET_POPULAR";
export let GET_TOP_RATED = "GET_TOP_RATED";
export let GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export let SET_SEARCH_TERM = "SET_SEARCH_TERM";
export let SET_FILTER = "SET_FILTER";
export let SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE";
export let SET_VIEW = "SET_VIEW";
export let GET_MOVIES_FOR_GENRE = "GET_MOVIES_FOR_GENRE";
export let GET_PAGE = "GET_PAGE";

export let getMovies = (searchParams, cb) => {
  switch(searchParams.movieFilter) {
    case "TOP_RATED":
      return getTopRated(searchParams, cb);
    case "NOW_PLAYING":
      return getNowPlaying("/movies/now-playing", searchParams, cb);
    case "HOME":
    case "POPULAR":
      return getPopular(searchParams, cb);
    default:
      return searchMovies(searchParams, cb);
  } 
}

export let searchMovies = (initiator, searchParams, cb) => {
  return {
    type: SEARCH_MOVIES,
    initiator,
    searchParams,
    cb
  };
};

export let getNowPlaying = (initiator, searchParams, cb) => {
  return {
    type: GET_NOW_PLAYING,
    initiator,
    searchParams,
    cb
  };
};

export let getPopular = (initiator, searchParams, cb) => {
  return {
    type: GET_POPULAR,
    initiator,
    searchParams,
    cb
  };
};

export let getTopRated = (initiator, searchParams, cb) => {
  return {
    type: GET_TOP_RATED,
    initiator,
    searchParams,
    cb
  };
};

export let getMovieDetails = (initiator, movieId, cb) => ({
  type: GET_MOVIE_DETAILS,
  initiator,
  movieId,
  cb
});

export let getMoviesForGenre = (initiator, genreId, searchParams, cb) => ({
  type: GET_MOVIES_FOR_GENRE,
  initiator,
  genreId,
  searchParams,
  cb
});

export let setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  searchTerm
});

export let setFilter = (filter) => ({
  type: SET_FILTER,
  filter
});

export let clearSelectedMovie = () => ({
  type: SET_SELECTED_MOVIE,
  selectedMovie: null
});

export let changeView = (view) => ({
  type: SET_VIEW,
  view
});

export let setSearchParams = (initiator, params) => ({
  type: "SET_SEARCH_PARAMS",
  initiator,
  params
});