import { connect } from 'react-redux'
import MovieDetails from "../components/MovieDetails";
import { clearSelectedMovie } from '../actions';
const mapStateToProps = (state, ownProps) => ({
  movie: state.moviesData.selectedMovie
})

const mapDispatchToProps = (dispatch) => ({
  backToList: () => dispatch(clearSelectedMovie())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails)