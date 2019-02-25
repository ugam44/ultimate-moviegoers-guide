import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MovieList from "../components/MovieList";
import { searchMovies, setSearchParams } from "../actions";

let SearchResults = (props) => {
  let { searchTerm, data: { totalResults } } = props;
  return (
    <div>
      <hgroup style={{marginBottom: "20px"}}>
        <h1>Search Results</h1>
        <h2 className="lead"><strong className="text-danger">{totalResults}</strong> results were found for <strong className="text-danger">{searchTerm}</strong></h2>
      </hgroup>
      <MovieList {...props} />
    </div>
  )
}

let mapStateToProps = (state, ownProps) => {
  let searchTerm = ownProps.location.search.match(/term=[^&]*/)[0].split("=")[1];
  let initialData = {
    movies: [],
    searchParams: {page: 1},
    totalResults: 0,
    totalPages: 0,
    currentPage: 1,
    isInvalid: true
  };
  return {
    loading: state.moviesData.loading,
    searchTerm,
    data: Object.assign({}, initialData, state.moviesData.searchResults[ownProps.match.url])
  }
};

let mapDispatchToProps = (dispatch, ownProps) => ({
  executeSearch: (searchParams) => {
    let searchTerm = ownProps.location.search.match(/term=[^&]*/)[0].split("=")[1];
    // debugger;
    dispatch(searchMovies(ownProps.match.url, {...searchParams, query: searchTerm}))
  },
  onPageChange: (pageNumber) => dispatch(setSearchParams(ownProps.match.url, {page: pageNumber}))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));