import React from 'react';
import { connect } from "react-redux";
import '../assets/styles/App.css';
import VisibleMovieList from '../containers/VisibleMovieList';
import SelectedMovie from '../containers/SelectedMovie';
import Nav from './Nav';
import Footer from './Footer';
import Home from '../containers/Home';

let App = ({selectedView}) => {
  return (
    <div>
      <Nav />
      <div className="container" style={{padding: "60px 15px 0"}}>
        {selectedView === "HOME" && <Home />}
        {selectedView === "RESULTS_LIST" && <VisibleMovieList />}
        {selectedView === "MOVIE_DETAILS" && <SelectedMovie />}
      </div>
      <Footer />
    </div>
  );
}

let mapStateToProps = (state) => ({ selectedView: state.view });

export default connect(mapStateToProps)(App);
