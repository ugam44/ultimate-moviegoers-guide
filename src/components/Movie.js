import React from "react";

let Movie = ({ onClick, movie}) => (
  <div>
    <pre>{JSON.stringify(movie)}</pre>
  </div>
)

export default Movie;
