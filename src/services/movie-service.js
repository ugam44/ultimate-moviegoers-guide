import { XhrService } from "./xhr-service";
let xhr = new XhrService();

let movieService = {
  "searchMovies": (payload) => {
    var url = xhr.generateAPIUrl(`/search/movie?query=${payload.searchTerm}&${payload.queryString}`);
    return xhr.get(url).then((response) => {
      var data = response.data;
      data.searchTerm = payload.searchTerm;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getNowPlaying": (payload) => {
    var url = xhr.generateAPIUrl(`/movie/now_playing?&language=en-US&${payload.queryString}`);
    return xhr.get(url).then((response) => {
      var data = response.data;
      data.searchTerm = "Now Playing";
      data.filter = payload.filter;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getPopular": (payload) => {
    var url = xhr.generateAPIUrl(`/movie/popular?&language=en-US&${payload.queryString}`);
    return xhr.get(url).then((response) => {
      var data = response.data;
      data.searchTerm = "Popular";
      data.filter = payload.filter;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getTopRated": (payload) => {
    var url = xhr.generateAPIUrl(`/movie/top_rated?&language=en-US&${payload.queryString}`);
    return xhr.get(url).then((response) => {
      var data = response.data;
      data.searchTerm = "Top Rated";
      data.filter = payload.filter;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getMovieDetails": (payload) => {
    var url = xhr.generateAPIUrl(`/movie/${payload.movieId}?&language=en-US`);
    return xhr.get(url).then((response) => {
      var data = response.data;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
}

export default movieService;