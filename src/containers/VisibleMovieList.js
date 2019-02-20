import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { getMovieDetails, changeView, getPage } from "../actions";

let mapStateToProps = state => {
  return {...state.moviesData};
}

let mapDispatchToProps = dispatch => ({
  onPageChange: (pageNumber) => dispatch(getPage(pageNumber)),
  onSelectMovie: (movieId) => {
    dispatch(getMovieDetails(movieId, () => dispatch(changeView("MOVIE_DETAILS"))))
  },
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MovieList);
