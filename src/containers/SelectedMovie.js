import React, { Component } from "react";
import { connect } from 'react-redux'
import MovieDetails from "../components/MovieDetails";
import { getMoviesForGenre, getMovieDetails } from '../actions';

class SelectedMovie extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getMovieDetails(this.props.match.params.movie_id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.movie_id !== prevProps.match.params.movie_id) {
      this.props.getMovieDetails(this.props.match.params.movie_id);
    }
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
  movie: (state.moviesData.searchResults[ownProps.match.url] || {}).movie
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getMovieDetails: (movieId) => dispatch(getMovieDetails(ownProps.match.url, movieId)),
  selectGenre: (genre) => {
    dispatch(getMoviesForGenre({genreId: genre.id, genreName: genre.name}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedMovie)