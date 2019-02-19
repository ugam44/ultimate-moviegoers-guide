import React from "react";

let MovieDetails = ({ movie, backToList }) => {
  return (
    <div>
      <button className="btn btn-danger" onClick={backToList}>Back</button>
      <pre>{JSON.stringify(movie)}</pre>
    </div>
  )
}

export default MovieDetails;