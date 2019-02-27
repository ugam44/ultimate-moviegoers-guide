let movieService = ({xhrService}) => ({
  "searchMovies": (payload) => {
    var queryString = xhrService.generateQueryStringParams(payload.params);
    var url = xhrService.generateAPIUrl(`/search/movie?${queryString}`);
    return xhrService.get(url).then((response) => {
      var data = response.data;
      data.searchTerm = payload.searchTerm;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getNowPlaying": (payload) => {
    var queryString = xhrService.generateQueryStringParams(payload.params);
    var url = xhrService.generateAPIUrl(`/movie/now_playing?${queryString}`);
    return xhrService.get(url).then((response) => {
      var data = response.data;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getPopular": (payload) => {
    var queryString = xhrService.generateQueryStringParams(payload.params);
    var url = xhrService.generateAPIUrl(`/movie/popular?${queryString}`);
    return xhrService.get(url).then((response) => {
      var data = response.data;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getTopRated": (payload) => {
    var queryString = xhrService.generateQueryStringParams(payload.params);
    var url = xhrService.generateAPIUrl(`/movie/top_rated?${queryString}`);
    return xhrService.get(url).then((response) => {
      var data = response.data;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getMoviesForGenre": (payload) => {
    var queryString = xhrService.generateQueryStringParams(payload.params);
    var url = xhrService.generateAPIUrl(`/genre/${payload.genreId}/movies?${queryString}`);
    return xhrService.get(url).then((response) => {
      var data = response.data;
      return data;
    }).catch((err) => {
      throw new Error(err);
    });
  },
  "getMovieDetails": (payload) => {
    var url = xhrService.generateAPIUrl(`/movie/${payload.movieId}?append_to_response=reviews,videos,releases,similar,external_ids`);
    return xhrService.get(url).then((response) => {
      var data = response.data;
      data.releases.countries = data.releases.countries.filter(country => country["iso_3166_1"] === "US" && country.certification !== "");
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  },
  "getLatestMovie": (payload) => {
    var url = xhrService.generateAPIUrl(`/movie/latest`);
    return xhrService.get(url).then((response) => {
      var data = response.data;
      return data;
    }).catch((err) => {
      throw new Error(err);
    })
  }
})

export default movieService;