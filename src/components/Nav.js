import React from "react";
import SearchMovies from "../containers/SearchMovies";
import { connect } from "react-redux";
import { getMovies, changeView } from "../actions";
import { Link } from "react-router-dom";

let Nav = ({ filter }) => {
  var links = [
    {filter: "POPULAR", label: "Popular", path: "/movies/popular"},
    {filter: "NOW_PLAYING", label: "Now Playing", path: "/movies/now-playing"},
    {filter: "TOP_RATED", label: "Top Rated", path: "/movies/top-rated"},
  ]
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" to="/home">Ultimate Moviegoers</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          {links.map((link, index) => (
            <li key={index} className={"nav-item " + (filter === link.filter ? "active" : "")}>
              <Link className="nav-link" to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <SearchMovies />
      </div>
    </nav>
  )
};

let mapStateToProps = (state) => ({
  filter: state.moviesData.filter
})

export default connect(mapStateToProps)(Nav);