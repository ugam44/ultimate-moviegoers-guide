import React from "react";

let MovieDetails = ({ movie, backToList, selectGenre }) => {
  return (
    <div>
      <button className="btn btn-danger" onClick={backToList}>Back</button>
      <pre>{JSON.stringify(movie)}</pre>
      <ul>
        {movie && movie.genres.map((genre, index) => (
          <li key={index} onClick={() => selectGenre(genre)}>{genre.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default MovieDetails;