import React from "react";
import SearchMovies from "../containers/SearchMovies";
import { connect } from "react-redux";
import { getMovies, changeView } from "../actions";

let Nav = ({ onGetMovies, onGoHome, filter }) => {
  var links = [
    {filter: "POPULAR", label: "Popular"},
    {filter: "NOW_PLAYING", label: "Now Playing"},
    {filter: "TOP_RATED", label: "Top Rated"},
  ]
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#" onClick={() => onGoHome()}>Ultimate Moviegoers</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          {/* <li className={"nav-item " + (filter === "HOME" ? "active" : "")}>
            <a className="nav-link" href="#" onClick={() => onGoHome()}>Home</a>
          </li> */}
          {links.map((link, index) => (
            <li key={index} className={"nav-item " + (filter === link.filter ? "active" : "")}>
              <a className="nav-link" href="#" onClick={() => onGetMovies(link.filter)}>{link.label}</a>
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

let mapDispatchToProps = (dispatch) => ({
  onGoHome: () => {
    dispatch(getMovies({movieFilter: "HOME"}, () => dispatch(changeView("HOME"))));
  },
  onGetMovies: (filter) => {
    dispatch(getMovies({movieFilter: filter}, () => dispatch(changeView("RESULTS_LIST"))));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);