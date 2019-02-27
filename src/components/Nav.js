import React from "react";
import SearchMovies from "../containers/SearchMovies";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

let Nav = ({ currTab }) => {
  var links = [
    {label: "Popular", path: "/movies/popular"},
    {label: "Now Playing", path: "/movies/now-playing"},
    {label: "Top Rated", path: "/movies/top-rated"},
  ];
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top tmdb-secondary-bg">
      {/* <Link className="navbar-brand" to="/home">Ultimate Moviegoers</Link> */}
      <Link className="navbar-brand" to="/home" style={{position: "relative", width: "120px"}}><img src="/nav-logo.png" alt="UMG Logo" style={{height: "90px", position: "absolute", top: "-2.6rem", left: "0"}} /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          {links.map((link, index) => (
            <li key={index} className={"nav-item " + (currTab === link.path ? "active tmdb-primary-text" : "")}>
              <Link className="nav-link" to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <SearchMovies />
      </div>
    </nav>
  )
};

let mapStateToProps = (state, ownProps) => ({
  currTab: ownProps.location.pathname
})

export default withRouter(connect(mapStateToProps)(Nav));