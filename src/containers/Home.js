import React from "react";
import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { getPage } from "../actions";

let Home = (props) => {
  console.log("I'm home")
  return (
    <div>
      <h1>I am home!</h1>
      <MovieList {...props} />
    </div>
  )
}

let mapStateToProps = state => {
  return {...state.moviesData};
}

let mapDispatchToProps = dispatch => ({
  onPageChange: (pageNumber) => dispatch(getPage(pageNumber))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home);