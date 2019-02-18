import React from "react";
let imagePath = "https://image.tmdb.org/t/p/w500";
let Movie = ({ onClick, movie}) => (
  <div className="card bg-light mb-3" style={{maxWidth: "20rem", maxHeight: "25rem", overflow: "auto"}}>
    <img className="card-img-top" 
         src={movie.backdrop_path ? imagePath + movie.backdrop_path : "http://www.smartstraps.com/wp-content/uploads/No-Image-Available.jpg"} 
         alt="Movie artwork"/>
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Release: {movie.release_date} | {movie.vote_average}/10</h6>
      <p className="card-text">{movie.overview}</p>
    </div>
  </div>
)

export default Movie;
