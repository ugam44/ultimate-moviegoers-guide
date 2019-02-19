let defaultState = {movies: [], moviesListIsValid: false, currentPage: 1, totalPages: 0, totalResults: 0, searchTerm: "", filter: "", selectedMovie: null};
let movies = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_SUCCESS': {
      let searchResults = {
        currentPage: action.payload.page,
        movies: action.payload.results,
        totalPages: action.payload.total_pages,
        totalResults: action.payload.total_results,
        moviesListIsValid: true
      };
      return {...state, ...searchResults};
    }
    case 'GET_MOVIES_SUCCESS': {
      let searchResults = {
        currentPage: action.payload.page,
        movies: action.payload.results,
        totalPages: action.payload.total_pages,
        totalResults: action.payload.total_results,
        moviesListIsValid: true
      };
      return {...state, ...searchResults};
    }
    case 'SET_SEARCH_TERM':
      return {...state, searchTerm: action.searchTerm};
    case 'SET_FILTER':
      return {...state, filter: action.filter};
    case 'INVALIDATE_MOVIES_LIST':
      return {...state, moviesListIsValid: false};
    case 'GET_MOVIES_ERROR':
      return {...defaultState};
    case 'SEARCH_MOVIES_ERROR':
      return {...defaultState};
    default:
      return state;
  }
};

export default movies;
