export let SEARCH_MOVIES = "SEARCH_MOVIES";
export let GET_NOW_PLAYING = "GET_NOW_PLAYING";
export let GET_POPULAR = "GET_POPULAR";
export let GET_TOP_RATED = "GET_TOP_RATED";
export let GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export let GET_MOVIES_FOR_GENRE = "GET_MOVIES_FOR_GENRE";
export let GET_LATEST_MOVIE = "GET_LATEST_MOVIE";
export let SET_SEARCH_PARAMS = "SET_SEARCH_PARAMS";
export let SET_LOADING = "SET_LOADING";

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

export let getLatestMovie = (initiator, cb) => ({
  type: GET_LATEST_MOVIE,
  initiator,
  cb
})

export let setSearchParams = (initiator, params) => ({
  type: SET_SEARCH_PARAMS,
  initiator,
  params
});

export let setLoading = (isLoading) => ({
  type: SET_LOADING,
  isLoading
});