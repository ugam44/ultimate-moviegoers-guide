import axios from "axios";
export class XhrService {
  movieAPIKey = "89835e8482c6060a7265d6ebd1e42cb4";
  apiEndpoint = "https://api.themoviedb.org/3";
  generateAPIUrl(route) {
    var url = this.apiEndpoint + route;
    // if query string doesn't exist, start it
    if (url.indexOf("?") === -1) {
      url += `?`;
    }
    // add API key
    url += `&api_key=${this.movieAPIKey}`;
    // add cache busting
    url += `&_=${Date.now()}`;
    return url;
  }
  generateQueryStringParams(obj = {}) {
    return Object.keys(obj).map(key => key + "=" + obj[key]).join("&");
  }
  get (url) {
    return axios.get(url)
  }
  post (url, payload) {
    return axios.post(url, payload)
  }
  put (url, payload) {
    return axios.put(url, payload)
  }
  delete (url) {
    return axios.delete(url)
  }
}