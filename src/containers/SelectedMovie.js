import { connect } from 'react-redux'
import MovieDetails from "../components/MovieDetails";
const mapStateToProps = (state, ownProps) => ({
  movie: state.movieData.selectedMovie
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails)