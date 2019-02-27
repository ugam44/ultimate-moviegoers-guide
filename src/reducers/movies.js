let defaultState = {searchResults: {}, loading: false};
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
    case 'GET_LATEST_MOVIE_SUCCESS':
    case 'GET_MOVIE_DETAILS_SUCCESS': {
      let searchResults = {
        movie: action.payload,
        searchParams: action.query.params,
        initiator: action.query.initiator,
        isInvalid: false
      };
      let searches = Object.assign({}, state.searchResults, {[action.query.initiator]: searchResults});
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
    default:
      return state;
  }
};

export default movies;
