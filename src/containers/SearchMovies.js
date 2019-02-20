import { connect } from "react-redux";
import { searchMovies, changeView } from "../actions";
import SearchBar from "../components/SearchBar";

let mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

let mapDispatchToProps = dispatch => ({
  onTextInput: (searchTerm) => {
    dispatch(searchMovies({term: searchTerm}, () => dispatch(changeView("RESULTS_LIST"))))
  },
  onSearch: (searchTerm) => {
    dispatch(searchMovies({term: searchTerm}, () => dispatch(changeView("RESULTS_LIST"))))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
