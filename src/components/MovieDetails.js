import React from "react";

let MovieDetails = ({ movie }) => {
  return (
    <div>
      <pre>{JSON.stringify(movie)}</pre>
    </div>
  )
}

export default MovieDetails;