import React, { Component } from "react";
import { connect } from 'react-redux'
import MovieDetails from "../components/MovieDetails";
import { changeView, getMoviesForGenre, getMovieDetails } from '../actions';

class SelectedMovie extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getMovieDetails(this.props.match.params.movie_id);
  }
  render() {
    return (
      <div>
        <button className="btn btn-danger" onClick={this.props.history.goBack}>Back</button>
        <MovieDetails movie={this.props.movie} selectGenre={this.props.selectGenre}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  movie: state.moviesData.selectedMovie
})

const mapDispatchToProps = (dispatch) => ({
  getMovieDetails: (movieId) => dispatch(getMovieDetails(movieId)),
  selectGenre: (genre) => {
    dispatch(getMoviesForGenre({genreId: genre.id, genreName: genre.name}, () => dispatch(changeView("RESULTS_LIST"))))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedMovie)