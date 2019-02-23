import React from "react";
import "../assets/styles/Movie.css";
import { Link } from "react-router-dom";

let imagePath = "https://image.tmdb.org/t/p/w500";
let MovieListItem = ({ movie }) => (
  <article className="search-result row">
    <div className="col-xs-12 col-sm-12 col-md-3">
      <Link title={movie.title} className="thumbnail" to={`/movies/${movie.id}/details`}><img src={movie.backdrop_path ? imagePath + movie.backdrop_path : "http://www.smartstraps.com/wp-content/uploads/No-Image-Available.jpg"} alt="Movie Artwork" /></Link>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-2">
      <ul className="meta-search" style={{textAlign: "left"}}>
        <li><i className="fa fa-lg fa-calendar"></i> <span>{movie.release_date}</span></li>
        <li><i className={'fa fa-lg fa-' + (movie.vote_average >= 7 ? 'smile-o' : movie.vote_average <= 4 ? 'frown-o' : 'meh-o')}></i> <span>{movie.vote_average}/10</span></li>
        <li><i className="fa fa-lg fa-users"></i> <span>{movie.vote_count} votes</span></li>
      </ul>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-7 excerpet">
      <h3><Link to={`/movies/${movie.id}/details`}>{movie.title}</Link></h3>
      <p>{movie.overview}</p>						
      <span className="plus"><Link to={`/movies/${movie.id}/details`}><i className="fa fa-plus"></i></Link></span>
    </div>
    <span className="clearfix border"></span>
  </article>
)

export default MovieListItem;
