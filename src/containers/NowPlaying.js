import { connect } from "react-redux";
import { setCurrentPage, getNowPlaying } from "../actions";
import MovieList from "../components/MovieList";

let mapStateToProps = (state, ownProps) => ({
  loading: state.moviesData.loading,
  data: state.moviesData.searchResults[ownProps.match.path] || {
    movies: [],
    searchParams: {page: 1},
    totalResults: 0,
    totalPages: 0,
    currentPage: 1,
    isInvalid: true
  },
  title: "Now Playing"
});

let mapDispatchToProps = (dispatch, ownProps) => ({
  executeSearch: (searchParams) => dispatch(getNowPlaying(ownProps.match.path, searchParams)),
  onPageChange: (pageNumber) => dispatch(setCurrentPage(ownProps.match.path, pageNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);