import { connect } from "react-redux";
import { setCurrentPage, getMovies } from "../actions";
import MovieList from "../components/MovieList";

let mapStateToProps = (state) => ({
  moviesData: {...state.moviesData},
  movies: state.moviesData.movies,
  currentPage: state.moviesData.currentPage,
  totalPages: state.moviesData.totalPages,
  searchParams: {
    page: state.moviesData.currentPage
  },
  title: "Top Rated"
});

let mapDispatchToProps = (dispatch) => ({
  executeSearch: (searchParams) => dispatch(getMovies({movieFilter: "TOP_RATED", ...searchParams})),
  onPageChange: (pageNumber) => dispatch(setCurrentPage(pageNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);