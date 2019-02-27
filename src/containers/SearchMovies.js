import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { withRouter } from "react-router-dom";
import { setSearchParams } from "../actions";

let mapDispatchToProps = (dispatch, ownProps) => ({
  onSearch: (searchTerm) => {
    dispatch(setSearchParams("/search/movies", {page: 1, query: searchTerm}));
    ownProps.history.push(`/search/movies?term=${searchTerm}`);
  }
})

export default withRouter(connect(
  null,
  mapDispatchToProps
)(SearchBar));
