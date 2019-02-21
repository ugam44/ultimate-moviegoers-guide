import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { setCurrentPage, getMovies } from "../actions";

class NowPlaying extends Component {
  constructor() {
    super();
  }
  
  compareObjsProps(obj1, obj2) {
    var o1Keys = Object.keys(obj1);
    var o2Keys = Object.keys(obj2);
    
    return o1Keys.length === o2Keys.length && o1Keys.every(key => o2Keys.includes(key) && obj1[key] === obj2[key]);
  }
  
  componentDidMount() {
    this.searchParams = {...this.props.searchParams};
    this.props.executeSearch(this.searchParams);
  }

  componentDidUpdate() {
    if (this.searchParams && !this.compareObjsProps(this.searchParams, this.props.searchParams)) {
      this.props.executeSearch(this.props.searchParams);
      this.searchParams = {...this.props.searchParams};
    }
  }

  render() {
    return (
      <div>
        <h1>Now Playing</h1>
        <hr/>
        <MovieList {...this.props.moviesData} onPageChange={this.props.onPageChange}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  moviesData: {...state.moviesData},
  searchParams: {
    page: state.moviesData.currentPage
  }
});

let mapDispatchToProps = (dispatch) => ({
  executeSearch: (searchParams) => dispatch(getMovies({movieFilter: "NOW_PLAYING", ...searchParams})),
  onPageChange: (pageNumber) => dispatch(setCurrentPage(pageNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);