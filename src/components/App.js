import React from 'react';
import { Route } from "react-router-dom";
import '../assets/styles/App.css';
import Nav from './Nav';
import Footer from './Footer';
import Home from '../containers/Home';
import Movies from "../containers/Movies";
import SearchResults from '../containers/SearchResults';
import Genres from '../containers/Genres';

let App = () => {
  return (
    <div>
      <Nav />
      <div className="container" style={{padding: "65px 15px 5px"}}>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/genres/:genre_id-:genre_name/movies" component={Genres} />
        <Route path="/search/movies" render={SearchResults} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
