import { connect } from "react-redux";
import { searchMovies, setSearchTerm, setFilter } from "../actions";
import SearchBar from "../components/SearchBar";

let mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

let mapDispatchToProps = dispatch => ({
  onTextInput: (searchTerm) => {
    dispatch(setFilter(""))
    dispatch(searchMovies({term: searchTerm}))
  },
  onSearch: (searchTerm) => {
    dispatch(setFilter(""))
    dispatch(searchMovies({term: searchTerm}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
