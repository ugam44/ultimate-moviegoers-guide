import { connect } from "react-redux";
import { VisibilityFilters, getMovies } from "../actions";
import MovieList from "../components/MovieList";


let getVisibleMovies = (movies, filter) => {
  console.log(movies, filter);
  switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return movies;
    case VisibilityFilters.NOW_PLAYING:
      return movies.filter(movie => movie.nowPlaying);
    case VisibilityFilters.SHOW_FEATURED:
      return movies.filter(movie => movie.featured);
    case VisibilityFilters.TOP_RATED:
      return movies.slice().sort((a,b)  => {
        var rating1 = a.rating;
        var rating2 = b.rating;
        return rating1 < rating2 ? 1 : rating1 > rating2 ? -1 : 0;
      });
  }
}

let mapStateToProps = state => ({
  movieListData: Object.assign({}, state.moviesData.searchResults, {movies:  getVisibleMovies(state.moviesData.searchResults.movies, state.visibilityFilter)}),
});

let mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
