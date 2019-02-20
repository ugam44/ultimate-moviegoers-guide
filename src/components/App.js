import React from 'react';
import { connect } from "react-redux";
import '../assets/styles/App.css';
import VisibleMovieList from '../containers/VisibleMovieList';
import SelectedMovie from '../containers/SelectedMovie';
import Nav from './Nav';
import Footer from './Footer';
import MovieTypeButton from "../containers/MovieTypes";

let App = ({selectedView}) => {
  return (
    <div>
      <Nav />
      <div className="container" style={{padding: "60px 15px 0"}}>
        <div className="col">
          <MovieTypeButton filter="NOW_PLAYING">Now Playing</MovieTypeButton>
          <MovieTypeButton filter="POPULAR">Popular</MovieTypeButton>
          <MovieTypeButton filter="TOP_RATED">Top Rated</MovieTypeButton>
        </div>
        {selectedView === "RESULTS_LIST" && <VisibleMovieList />}
        {selectedView === "MOVIE_DETAILS" && <SelectedMovie />}
      </div>
      <Footer />
    </div>
  );
}

let mapStateToProps = (state) => ({ selectedView: state.view });

export default connect(mapStateToProps)(App);
