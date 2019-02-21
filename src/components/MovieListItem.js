import React from "react";
import "../assets/styles/Movie.css";
import { connect } from "react-redux";
import { getMovieDetails, changeView } from "../actions"

let imagePath = "https://image.tmdb.org/t/p/w500";
let MovieListItem = ({ selectMovie, movie }) => (
  <article className="search-result row">
    <div className="col-xs-12 col-sm-12 col-md-3">
      <a href="#" title={movie.title} className="thumbnail"><img src={movie.backdrop_path ? imagePath + movie.backdrop_path : "http://www.smartstraps.com/wp-content/uploads/No-Image-Available.jpg"} alt="Movie Artwork" /></a>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-2">
      <ul className="meta-search" style={{textAlign: "left"}}>
        <li><i className="fa fa-lg fa-calendar"></i> <span>{movie.release_date}</span></li>
        <li><i className={'fa fa-lg fa-' + (movie.vote_average >= 7 ? 'smile-o' : movie.vote_average <= 4 ? 'frown-o' : 'meh-o')}></i> <span>{movie.vote_average}/10</span></li>
        <li><i className="fa fa-lg fa-users"></i> <span>People</span></li>
      </ul>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-7 excerpet">
      <h3><a href="#" title="">{movie.title}</a></h3>
      <p>{movie.overview}</p>						
      <span className="plus" onClick={() => selectMovie(movie.id)}><a href="#" title="More Details"><i className="fa fa-plus"></i></a></span>
    </div>
    <span className="clearfix border"></span>
  </article>
)

let mapDispatchToProps = (dispatch) => ({
  selectMovie: (movieId) => {
    dispatch(getMovieDetails(movieId, () => dispatch(changeView("MOVIE_DETAILS"))))
  }
})

export default connect(null, mapDispatchToProps)(MovieListItem);
