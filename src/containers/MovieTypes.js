import { connect } from 'react-redux'
import Button from '../components/Button';
import { getMovies, changeView } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(getMovies({movieFilter: ownProps.filter}, () => dispatch(changeView("RESULTS_LIST"))));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

