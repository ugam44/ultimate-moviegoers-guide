import React from 'react';
import { connect } from "react-redux";
import '../assets/styles/App.css';
import VisibleMovieList from '../containers/VisibleMovieList';
import SearchMovies from '../containers/SearchMovies';

let App = ({selectedMovie}) => {
  return (
    <div className="container" style={{padding: "20px"}}>
      <SearchMovies />
      <VisibleMovieList />
    </div>
  );
}

let mapStateToProps = (state) => ({ selectedMovie: state.moviesData.selectedMovie });

export default connect(mapStateToProps)(App);
