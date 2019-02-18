import React, { Component } from "react";
import Movie from "./Movie";

export default class MovieList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // this.props.getMovies();
  }

  render () {
    let {movies, page, totalPages, totalResults} = this.props.movieListData;
    return (
      <div>
        <h3>Movies List</h3>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
          {movies.map((movie, index) => {
            return (
              <Movie key={index} movie={movie} />
            )
          })}
        </div>
      </div>
    )
  }
}

