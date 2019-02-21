import { connect } from 'react-redux'
import MovieDetails from "../components/MovieDetails";
import { changeView, getMoviesForGenre } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  movie: state.moviesData.selectedMovie
})

const mapDispatchToProps = (dispatch) => ({
  backToList: () => {
    dispatch(changeView("RESULTS_LIST"));
  },
  selectGenre: (genre) => {
    dispatch(getMoviesForGenre({genreId: genre.id, genreName: genre.name}, () => dispatch(changeView("RESULTS_LIST"))))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails)