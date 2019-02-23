import { connect } from "react-redux";
import { setSearchParams, getTopRated } from "../actions";
import MovieList from "../components/MovieList";

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
  title: "Top Rated"
});

let mapDispatchToProps = (dispatch, ownProps) => ({
  executeSearch: (searchParams) => dispatch(getTopRated(ownProps.match.url, searchParams)),
  onPageChange: (pageNumber) => dispatch(setSearchParams(ownProps.match.url, {page: pageNumber}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);