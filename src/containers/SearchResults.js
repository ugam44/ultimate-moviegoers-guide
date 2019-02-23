import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

let SearchResults = ({ totalResults, searchTerm, match }) => {
  console.log(match);
  console.log(searchTerm);
  return (
    <hgroup style={{marginBottom: "20px"}}>
      <h1>Search Results</h1>
      <h2 className="lead"><strong className="text-danger">{totalResults}</strong> results were found for <strong className="text-danger">{searchTerm}</strong></h2>
    </hgroup>
  )
}


let mapStateToProps = (state, ownProps) => ({
  totalResults: state.moviesData.totalResults,
  searchTerm: ownProps.location.search.match(/term=[^&]*/)[0].split("=")[1]
});

export default withRouter(connect(mapStateToProps)(SearchResults));