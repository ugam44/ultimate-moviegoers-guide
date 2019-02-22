import React from 'react';
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import '../assets/styles/App.css';
import Nav from './Nav';
import Footer from './Footer';
import Home from '../containers/Home';
import Movies from "../containers/Movies";

let App = ({selectedView}) => {
  return (
    <div>
      <Nav />
      <div className="container" style={{padding: "60px 15px 0"}}>
        <Route path="/movies" component={Movies} />
        <Route path="/home" component={Home} />
        <Route path="/search/movies" render={({location}) => <h3>Search term: {location.search.match(/term=[^&]*/)[0].split("=")[1]}</h3>} />
      </div>
      <Footer />
    </div>
  );
}

let mapStateToProps = (state) => ({ selectedView: state.view });

export default connect(mapStateToProps)(App);
