import React from "react";
import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { getMovies, setSearchParams } from "../actions";

let Home = (props) => {
  return (
    <div>
      <h1>I am home!</h1>
      <MovieList {...props} />
    </div>
  )
}

let mapStateToProps = (state) => ({
  moviesData: {...state.moviesData},
  movies: state.moviesData.movies,
  currentPage: state.moviesData.currentPage,
  totalPages: state.moviesData.totalPages,
  searchParams: {
    page: state.moviesData.currentPage
  }
});

let mapDispatchToProps = (dispatch, ownProps) => ({
  executeSearch: (searchParams) => dispatch(getMovies({movieFilter: "NOW_PLAYING", ...searchParams})),
  onPageChange: (pageNumber) => dispatch(setSearchParams(ownProps.match.path, {page: pageNumber}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);