import React, { Component } from "react";
import { connect } from "react-redux";
import { getNowPlaying, getPopular, setSearchParams } from "../actions";
import ImageCarousel from "../components/ImageCarousel";
import { Link } from "react-router-dom";
import "../assets/styles/Home.css";

let imagePath = "https://image.tmdb.org/t/p/";

class Home extends Component {
  constructor()  {
    super();
  }

  componentDidMount() {
    this.props.executeSearch();
  }

  render () {
    let { nowPlaying, popular, loading } = this.props;
    let nowPlayingCarouselData = shuffleArray(getCarouselData(nowPlaying.movies));
    let popularCarouselData = shuffleArray(getCarouselData(popular.movies));
    return (
      <div>
        <div className="home-header">
          {/* <SearchBar onSearch={onSearch} /> */}
          <h1 className="home-header-text">Ultimate Moviegoers Guide</h1>
        </div>
        {!loading && (
          <div>
            {!!popularCarouselData.length && (
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-10">
                  <h3>Popular Movies</h3>
                  <ol>
                    {popular.movies.slice(0, 10).map(movie => (
                      <li><Link to={`/movies/${movie.id}/details`} className="text-secondary">{movie.title} ({movie.release_date.substring(0, 4)})</Link></li>
                    ))}
                    <li style={{listStyle: "none"}}><Link to={"/movies/popular"} className="text-secondary">See All...</Link></li>
                  </ol>
                </div>
                <div className="col-lg-6 col-md-12 mt-10">
                  <ImageCarousel id="popularCarousel" images={popularCarouselData} getImagePath={getImagePath} />
                </div>
              </div>
            )}
            {!!nowPlayingCarouselData.length && (
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-10">
                  <ImageCarousel id="nowPlayingCarousel" images={nowPlayingCarouselData} getImagePath={getImagePath} />
                </div>
                <div className="col-lg-6 col-md-12 mt-10">
                  <h3>Now Playing Movies</h3>
                  <ol>
                    {nowPlaying.movies.slice(0, 10).map(movie => (
                      <li><Link to={`/movies/${movie.id}/details`} className="text-secondary">{movie.title} ({movie.release_date.substring(0, 4)})</Link></li>
                    ))}
                    <li style={{listStyle: "none"}}><Link to={"/movies/now-playing"} className="text-secondary">See All...</Link></li>
                  </ol>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

function shuffleArray(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}

function getImagePath(path, size = 500) {
  return path ? imagePath + (size === "original" ? size : `w${size}`) + path : "http://www.smartstraps.com/wp-content/uploads/No-Image-Available.jpg";
}

function getCarouselData(movies) {
  return movies.filter(movie => movie.backdrop_path).map(movie => ({
    path: movie.backdrop_path,
    link: `/movies/${movie.id}/details`,
    title: movie.title,
    description: movie.overview
  }));
}

function getResultsForInitiator (state, initiator) {
  return state.moviesData.searchResults[initiator] || {
    movies: [],
    searchParams: {page: 1},
    totalResults: 0,
    totalPages: 0,
    currentPage: 1,
    isInvalid: true
  };
}

let mapStateToProps = (state) => ({
  loading: state.moviesData.loading,
  nowPlaying: getResultsForInitiator(state, "/movies/now-playing"),
  popular: getResultsForInitiator(state, "/movies/popular")
});

let mapDispatchToProps = (dispatch, ownProps) => ({
  executeSearch: () => {
    dispatch(getNowPlaying("/movies/now-playing", {page: 1}));
    dispatch(getPopular("/movies/popular", {page: 1}));
  },
  onSearch: (searchTerm) => {
    dispatch(setSearchParams("/search/movies", {page: 1, query: searchTerm}));
    ownProps.history.push(`/search/movies?term=${searchTerm}`);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);