import { connect } from 'react-redux'
import Button from '../components/Button';
import { getMovies } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(getMovies({movieFilter: ownProps.filter}));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

