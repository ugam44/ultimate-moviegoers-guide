import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { getMovies, getMovieDetails } from "../actions";

let mapStateToProps = state => {
  return {...state.moviesData};
}

let mapDispatchToProps = dispatch => ({
  onPageChange: (pageNumber, filter) => dispatch(getMovies({movieFilter: filter, page: pageNumber})),
  onSelectMovie: (movieId) => {
    dispatch(getMovieDetails(movieId))
  },
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MovieList);
