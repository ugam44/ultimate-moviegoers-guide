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