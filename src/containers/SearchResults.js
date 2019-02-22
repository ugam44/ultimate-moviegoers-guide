import React from "react";

let SearchResults = ({ totalResults, searchTerm }) => {

  return (
    <hgroup style={{marginBottom: "20px"}}>
      <h1>Search Results</h1>
      <h2 className="lead"><strong className="text-danger">{totalResults}</strong> results were found for <strong className="text-danger">{searchTerm}</strong></h2>								
    </hgroup>
  )
}

export default SearchResults;