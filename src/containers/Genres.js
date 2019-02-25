import { connect } from "react-redux";
import { setSearchParams, getMoviesForGenre } from "../actions";
import MovieList from "../components/MovieList";

function titleCase(str) {
  return str.toLowerCase().split(" ").map(_str => _str.charAt(0).toUpperCase() + _str.slice(1)).join(" ");
}

let mapStateToProps = (state, ownProps) => ({
  loading: state.moviesData.loading,
  data: state.moviesData.searchResults[ownProps.match.url] || {
    movies: [],
    searchParams: {page: 1},
    totalResults: 0,
    totalPages: 0,
    currentPage: 1,
    isInvalid: true
  },
  title: titleCase(ownProps.match.params.genre_name)
});

let mapDispatchToProps = (dispatch, ownProps) => ({
  executeSearch: (searchParams) => dispatch(getMoviesForGenre(ownProps.match.url, ownProps.match.params.genre_id, searchParams)),
  onPageChange: (pageNumber) => dispatch(setSearchParams(ownProps.match.url, {page: pageNumber}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);