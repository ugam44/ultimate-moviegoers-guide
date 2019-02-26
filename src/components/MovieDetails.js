import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/MovieDetails.css";

let imagePath = "https://image.tmdb.org/t/p/w500";
function getImagePath(path) {
  return path ? imagePath + path : "http://www.smartstraps.com/wp-content/uploads/No-Image-Available.jpg";
}
let MovieDetails = ({ movie }) => {
  var similarMovies = movie && movie.similar.results.filter(similarMovie => similarMovie.backdrop_path);
  let releaseInfo = movie && movie.releases.countries[0];
  return (
    <div>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <pre>{JSON.stringify(movie)}</pre>
          <h3>Links</h3>
          <div>
            {!!movie.external_ids.instagram_id && <span title="Movie Instagram"><a href={`https://instagram.com/${movie.external_ids.instagram_id}`} target="_blank"><i className="fa fa-lg fa-instagram" style={{color: "#333"}}></i></a></span>}
            {!!movie.external_ids.twitter_id && <span title="Movie Twitter"><a href={`https://twitter.com/${movie.external_ids.twitter_id}`} target="_blank"><i className="fa fa-lg fa-twitter" style={{color: "#333"}}></i></a></span>}
            {!!movie.external_ids.facebook_id && <span title="Movie Facebook"><a href={`https://facebook.com/${movie.external_ids.facebook_id}`} target="_blank"><i className="fa fa-lg fa-facebook" style={{color: "#333"}}></i></a></span>}
            {!!movie.homepage && <span title="Movie Homepage"><a href={movie.homepage} target="_blank"><i className="fa fa-lg fa-film" style={{color: "#333"}}></i></a></span>}
          </div>
          <h3>Rating</h3>
          <div>
            <span className="badge badge-secondary">{releaseInfo.certification}</span>
          </div>
          <h3>Genres</h3>
            {movie.genres.map((genre, index) => (
              <Link className="badge badge-secondary" key={index} to={`/genres/${genre.id}-${genre.name}/movies`}>{genre.name}</Link>
            ))}
          <h3>Related</h3>
          <div id="relatedMoviesCarousel" className="carousel slide" data-ride="carousel" style={{width: "400px"}}>
            <ol className="carousel-indicators" style={{marginBottom: "0"}}>
              {similarMovies.map((_, index) => (
                <li key={index} data-target="#relatedMoviesCarousel" data-slide-to={index}></li>
              ))}
            </ol>
            <div className="carousel-inner">
              {similarMovies.map((similarMovie, index) => (
                <div className={"carousel-item " + (index === 0 ? 'active' : '')} key={index}>
                  <img src={getImagePath(similarMovie.backdrop_path)} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block carousel-text-container">
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
  )
}

let data = {
  "adult":false,
  "backdrop_path":"/aQXTw3wIWuFMy0beXRiZ1xVKtcf.jpg",
  "belongs_to_collection":null,
  "budget":200000000,
  "genres":[
    {
      "id":28,
      "name":"Action"
    },
    {
      "id":878,
      "name":"Science Fiction"
    },
    {
      "id":53,
      "name":"Thriller"
    }
  ],
  "homepage":"https://www.foxmovies.com/movies/alita-battle-angel",
  "id":399579,
  "imdb_id":"tt0437086",
  "original_language":"en",
  "original_title":"Alita: Battle Angel",
  "overview":"When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
  "popularity":371.529,
  "poster_path":"/xRWht48C2V8XNfzvPehyClOvDni.jpg",
  "production_companies":[
    {
      "id":10807,
      "logo_path":"/j0BcMaJKIiDDYHq9lriTcM0Npka.png",
      "name":"Troublemaker Studios",
      "origin_country":"US"
    }
  ],
  "production_countries":[
    {
      "iso_3166_1":"AR",
      "name":"Argentina"
    }
  ],
  "release_date":"2019-01-31",
  "revenue":130885895,
  "runtime":122,
  "spoken_languages":[
    {
      "iso_639_1":"en",
      "name":"English"
    }
  ],
  "status":"Released",
  "tagline":"An angel falls. A warrior rises.",
  "title":"Alita: Battle Angel",
  "video":false,
  "vote_average":6.8,
  "vote_count":564,
  "reviews":{
    "page":1,
    "results":[

    ],
    "total_pages":0,
    "total_results":0
  },
  "similar":{
    "page":1,
    "results":[
      {
        "adult":false,
        "backdrop_path":"/Fp3piEuHXxKnPBO5R0Wj4wjZHg.jpg",
        "genre_ids":[
          12,
          28,
          53,
          878
        ],
        "id":604,
        "original_language":"en",
        "original_title":"The Matrix Reloaded",
        "overview":"Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance.  Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source.  Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target.",
        "poster_path":"/ezIurBz2fdUc68d98Fp9dRf5ihv.jpg",
        "release_date":"2003-05-15",
        "title":"The Matrix Reloaded",
        "video":false,
        "vote_average":6.8,
        "vote_count":5319,
        "popularity":22.91
      }
    ],
    "total_pages":15,
    "total_results":299
  },
  "external_ids":{
    "imdb_id":"tt0437086",
    "facebook_id":"AlitaMovie",
    "instagram_id":"AlitaMovie",
    "twitter_id":"AlitaMovie"
  }
}


export default MovieDetails;