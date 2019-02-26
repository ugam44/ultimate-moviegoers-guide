import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/MovieDetails.css";

let imagePath = "https://image.tmdb.org/t/p/";
function getImagePath(path, size = 500) {
  return path ? imagePath + (size === "original" ? size : `w${size}`) + path : "http://www.smartstraps.com/wp-content/uploads/No-Image-Available.jpg";
}
function formatMoney(amount) {
  return new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

let MovieDetails = ({ movie }) => {
  var similarMovies = movie && movie.similar.results.filter(similarMovie => similarMovie.backdrop_path);
  let releaseInfo = movie && movie.releases.countries[0];
  let trailer = movie && movie.videos.results.find(video => video.type === "Trailer");
  return (
    <div>
      {movie && (
        <div>
          <div className="row movie-header">
            <div className="col-sm-12 col-md-4">
              <img src={getImagePath(movie.poster_path, "original")} style={{maxWidth: "100%"}} alt="Movie Poster"/>
            </div>
            <div className="col-sm-12 col-md-8" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <h1>{movie.title} ({movie.release_date.substring(0, 4)})</h1>
              <h3 className="text-muted">{movie.tagline}</h3>
              <div className="rating-bar-container mt-10" style={{display: "flex", alignItems: "center"}}>
                <i className="fa fa-lg fa-thumbs-o-down"></i>
                <div className={"rating-bar-outline " + (movie.vote_average >= 7 ? 'positive' : movie.vote_average <= 4 ? 'negative' : 'neutral')}>
                  <div className="rating-bar-fill" style={{width: `${movie.vote_average * 10}%`}}></div>
                  <div className="rating-bar-text">{movie.vote_average} / 10</div>
                </div>
                <i className="fa fa-lg fa-thumbs-o-up"></i>
                <span style={{marginLeft: "10px"}}>{movie.vote_count} Votes</span>
              </div>
              <h3 className="mt-10">Overview</h3>
              <div>
                <span>{movie.overview}</span>
              </div>
              <div className="row">
                {!!releaseInfo && (
                  <div className="col-4 mt-10">
                      <h3>Rating</h3>
                      <div style={{fontSize: "1.25rem"}}>
                        <span className="badge badge-secondary">{releaseInfo.certification}</span>
                      </div>
                  </div>
                )}
                <div className="col-8 mt-10">
                  <h3>Genres</h3>
                  <div style={{fontSize: "1.25rem"}}>
                    {movie.genres.map((genre, index) => (
                      <Link className="badge badge-secondary" key={index} to={`/genres/${genre.id}-${genre.name}/movies`}>{genre.name}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row movie-facts">
            <div className="col-md-4 col-sm-12" style={{margin: "5px 0"}}>
              <div>
                <h3>Social</h3>
                {!!movie.external_ids.instagram_id && <span title="Movie Instagram">
                  <a href={`https://instagram.com/${movie.external_ids.instagram_id}`} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-2x fa-instagram" style={{color: "#333"}}></i>
                  </a>
                </span>}
                {!!movie.external_ids.twitter_id && <span title="Movie Twitter">
                  <a href={`https://twitter.com/${movie.external_ids.twitter_id}`} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-2x fa-twitter" style={{color: "#333"}}></i>
                  </a>
                </span>}
                {!!movie.external_ids.facebook_id && <span title="Movie Facebook">
                  <a href={`https://facebook.com/${movie.external_ids.facebook_id}`} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-2x fa-facebook" style={{color: "#333"}}></i>
                  </a>
                </span>}
                {!!movie.homepage && <span title="Movie Homepage">
                  <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-2x fa-film" style={{color: "#333"}}></i>
                  </a>
                </span>}
              </div>
              
              <h3 className="mt-10">Runtime</h3>
              <div>
                {`${parseInt(movie.runtime / 60)}h ${movie.runtime % 60}m`}
              </div>
            </div>
            <div className="col-md-4 col-sm-12" style={{margin: "5px 0"}}>
              <h3>Budget</h3>
              <div>
                {formatMoney(movie.budget)}<br/>
              </div>
              <h3 className="mt-10">Revenue</h3>
              <div>
                {formatMoney(movie.revenue)}<br/>
              </div>
            </div>
            <div className="col-md-4 col-sm-12" style={{margin: "5px 0"}}>
              <h3>Status</h3>
              <div>
                {movie.status}
              </div>
              <h3 className="mt-10">Release Date</h3>
              <div>
                {movie.release_date}
              </div>
            </div>
          </div>
          
          <div className="row" style={{padding: "10px 0"}}>
            {!!trailer && (
              <div className="col-lg-6 col-md-12 mt-10">
                <h3>Trailer</h3>
                <div>
                  <iframe title="Movie Trailer" width="533" height="303" style={{maxWidth: "100%"}} src={`//www.youtube.com/embed/${trailer.key}`} frameBorder="0" allowFullScreen="1"></iframe>
                </div>
              </div>
            )}   
            {!!similarMovies.length && (
              <div className="col-lg-6 col-md-12 mt-10">
                <h3>Related</h3>
                <div id="relatedMoviesCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators" style={{marginBottom: "0"}}>
                    {similarMovies.map((_, index) => (
                      <li key={index} data-target="#relatedMoviesCarousel" data-slide-to={index}></li>
                    ))}
                  </ol>
                  <div className="carousel-inner">
                    {similarMovies.map((similarMovie, index) => (
                      <div className={"carousel-item " + (index === 0 ? 'active' : '')} key={index}>
                        <img src={getImagePath(similarMovie.backdrop_path)} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block carousel-text-container">
                          <h5><Link to={`/movies/${similarMovie.id}/details`} style={{color: "white", textDecoration: "underline"}}>{similarMovie.title}</Link></h5>
                          <p style={{whiteSpace: "nowrap", overflowX: "hidden", textOverflow: "ellipsis"}}>{similarMovie.overview}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a className="carousel-control-prev" href="#relatedMoviesCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#relatedMoviesCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            )}       
          </div>


          <h3 className="mt-10">Production Companies</h3>
          <div className="card-deck">
            {!!movie.production_companies && movie.production_companies.map((company, index) => (
              <div className="card border-light" key={index} style={{maxWidth: "200px", background: "transparent"}}>
                <img className="card-img-top" src={getImagePath(company.logo_path, 200)} alt={`${company.name} logo`} />
                <div className="card-body">
                  <h5 style={{textAlign: "center"}}>{company.name}</h5>
                </div>
              </div>
            ))}
          </div>
          
          
        </div>
      )}
      
    </div>
  )
}

export default MovieDetails;