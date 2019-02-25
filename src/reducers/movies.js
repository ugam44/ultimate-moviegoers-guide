// let defaultState = {movies: [], moviesListIsValid: false, currentPage: 1, totalPages: 0, totalResults: 0, searchTerm: "", filter: "", currentQuery: {}, searchResults: {}, selectedMovie: null};
let defaultState = {filter: "", searchResults: {}, loading: false};
let movies = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_SUCCESS':
    case 'GET_MOVIES_SUCCESS':
    case 'GET_MOVIES_FOR_GENRE_SUCCESS': {
      let searchResults = {
        currentPage: action.payload.page,
        movies: action.payload.results,
        totalPages: action.payload.total_pages,
        totalResults: action.payload.total_results,
        searchParams: action.query.params,
        initiator: action.query.initiator,
        isInvalid: false
      };
      let searches = Object.assign({}, state.searchResults, {[action.query.initiator]: searchResults});
      return {...state, searchResults: searches};
    }
    case 'GET_MOVIE_DETAILS_SUCCESS': {
      let searchResults = {
        movie: action.payload,
        searchParams: action.query.params,
        initiator: action.query.initiator,
        isInvalid: false
      };
      let searches = Object.assign({}, state.searchResults, {[action.query.initiator]: searchResults});
      console.log(searches);
      return {...state, searchResults: searches};
    }
    case 'SET_CURRENT_PAGE':{
      let initiator = state.searchResults[action.initiator] || {};
      let newSearchResult = Object.assign({}, initiator, {isInvalid: true, searchParams: Object.assign({}, initiator.searchParams, {page: action.page})});
      let searches = Object.assign({}, state.searchResults, {[action.initiator]: newSearchResult});
      return {...state, searchResults: searches};
    }
    case 'SET_SEARCH_PARAMS':{
      let initiator = state.searchResults[action.initiator] || {};
      let newSearchResult = Object.assign({}, initiator, {isInvalid: true, searchParams: Object.assign({}, initiator.searchParams, {...action.params})});
      let searches = Object.assign({}, state.searchResults, {[action.initiator]: newSearchResult});
      console.log(searches);
      return {...state, searchResults: searches};
    }
    case 'SET_LOADING': {
      return {...state, loading: action.isLoading};
    }
    case 'SET_SELECTED_MOVIE':
      return {...state, selectedMovie: action.selectedMovie};
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
