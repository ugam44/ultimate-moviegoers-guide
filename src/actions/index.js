export let SEARCH_MOVIES = "SEARCH_MOVIES";
export let GET_NOW_PLAYING = "GET_NOW_PLAYING";
export let GET_POPULAR = "GET_POPULAR";
export let GET_TOP_RATED = "GET_TOP_RATED";
export let GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export let SET_SEARCH_TERM = "SET_SEARCH_TERM";
export let SET_FILTER = "SET_FILTER";

export let getMovies = (searchParams, cb) => {
  console.log(searchParams);
  switch(searchParams.movieFilter) {
    case "TOP_RATED":
      return getTopRated(searchParams, cb);
    case "NOW_PLAYING":
      return getNowPlaying(searchParams, cb);
    case "POPULAR":
      return getPopular(searchParams, cb);
    default:
      return searchMovies(searchParams, cb);
  } 
}

export let searchMovies = (searchParams, cb) => ({
  type: SEARCH_MOVIES,
  searchParams,
  cb
});

export let getNowPlaying = (searchParams, cb) => ({
  type: GET_NOW_PLAYING,
  searchParams,
  cb
});

export let getPopular = (searchParams, cb) => ({
  type: GET_POPULAR,
  searchParams,
  cb
});

export let getTopRated = (searchParams, cb) => ({
  type: GET_TOP_RATED,
  searchParams,
  cb
});

export let getMovieDetails = (movieId, cb) => ({
  type: GET_MOVIE_DETAILS,
  movieId,
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
