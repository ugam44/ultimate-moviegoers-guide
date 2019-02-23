import { XhrService } from "./xhr-service";
let xhr = new XhrService();

let movieService = {
  "searchMovies": (payload) => {
    var queryString = xhr.generateQueryStringParams(payload.params);
    var url = xhr.generateAPIUrl(`/search/movie?query=${payload.searchTerm}&${queryString}`);
    return xhr.get(url).then((response) => {
      var data = response.data;
      data.searchTerm = payload.searchTerm;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getNowPlaying": (payload) => {
    var queryString = xhr.generateQueryStringParams(payload.params);
    var url = xhr.generateAPIUrl(`/movie/now_playing?${queryString}`);
    return xhr.get(url).then((response) => {
      var data = response.data;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getPopular": (payload) => {
    var queryString = xhr.generateQueryStringParams(payload.params);
    var url = xhr.generateAPIUrl(`/movie/popular?${queryString}`);
    return xhr.get(url).then((response) => {
      var data = response.data;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getTopRated": (payload) => {
    var queryString = xhr.generateQueryStringParams(payload.params);
    var url = xhr.generateAPIUrl(`/movie/top_rated?${queryString}`);
    return xhr.get(url).then((response) => {
      var data = response.data;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getMoviesForGenre": (payload) => {
    var queryString = xhr.generateQueryStringParams(payload.params);
    var url = xhr.generateAPIUrl(`/genre/${payload.genreId}/movies?${queryString}`);
    return xhr.get(url).then((response) => {
      var data = response.data;
      return data;
    }).catch((err) => {
      throw new Error(err);
    });
  },
  "getMovieDetails": (payload) => {
    var url = xhr.generateAPIUrl(`/movie/${payload.movieId}?append_to_response=reviews,similar,external_ids`);
    return xhr.get(url).then((response) => {
      var data = response.data;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
}

export default movieService;