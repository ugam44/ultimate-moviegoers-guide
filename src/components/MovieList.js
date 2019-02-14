import React from "react";

let MovieList = ({ movies }) => (
  <div>
    <h3>Movies List</h3>
    {movies.map(movie => {
      return (
        <Movie movie={movie} />
      )
    })}
  </div>
)

export default MovieList;
