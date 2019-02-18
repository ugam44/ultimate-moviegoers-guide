export let CHANGE_NAME = "CHANGE_NAME";
export let SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";


export let changeName = (name) => ({
  type: CHANGE_NAME,
  name
});

export let getMovies = () => ({
  type: "GET_MOVIES"
});

export let searchMoviesSuccess = (resultsData) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: resultsData
});

export let VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_FEATURED: "SHOW_FEATURED",
  NOW_PLAYING: "NOW_PLAYING",
  TOP_RATED: "TOP_RATED"
};
