import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { getMovies } from "../actions";

let mapStateToProps = state => {
  return {...state.moviesData};
}

let mapDispatchToProps = dispatch => ({
  onPageChange: (pageNumber, filter) => dispatch(getMovies({movieFilter: filter, page: pageNumber}))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MovieList);
