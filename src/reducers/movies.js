let movies = (state = {searchResults: { movies: [], page: 0, totalPages: 0, totalResults: 0 }, selectedMovie: null}, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_SUCCESS': {
      let searchResults = {
        page: action.payload.page,
        movies: action.payload.results,
        totalPages: action.payload.total_pages,
        totalResults: action.payload.total_results
      }
      return {...state, searchResults};
    }
    case 'GET_MOVIES_SUCCESS': {
      let searchResults = {
        page: action.payload.page,
        movies: action.payload.results,
        totalPages: action.payload.total_pages,
        totalResults: action.payload.total_results
      }
      return {...state, searchResults};
    }
    default:
      return state;
  }
};

export default movies;
