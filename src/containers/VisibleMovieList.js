import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { getPage } from "../actions";

let mapStateToProps = state => {
  return {...state.moviesData};
}

let mapDispatchToProps = dispatch => ({
  onPageChange: (pageNumber) => dispatch(getPage(pageNumber))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MovieList);
