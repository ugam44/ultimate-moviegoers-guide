import { connect } from "react-redux";
import { searchMovies } from "../actions";
import SearchBar from "../components/SearchBar";
import { withRouter } from "react-router-dom";
import { setSearchParams } from "../actions";

let mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

let mapDispatchToProps = (dispatch, ownProps) => ({
  onTextInput: (searchTerm) => {
    dispatch(searchMovies({term: searchTerm}))
  },
  onSearch: (searchTerm) => {
    dispatch(setSearchParams("/search/movies", {page: 1, query: searchTerm}));
    ownProps.history.push(`/search/movies?term=${searchTerm}`);
  }
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar));
