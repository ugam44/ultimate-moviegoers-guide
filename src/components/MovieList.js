import React, { Component } from "react";
import MovieListItem from "./MovieListItem";
import Paging from "./Paging";
import "../assets/styles/MovieList.css";

class MovieList extends Component {
  constructor() {
    super();
  }
  compareObjsProps(obj1, obj2) {
    var o1Keys = Object.keys(obj1);
    var o2Keys = Object.keys(obj2);
    
    return o1Keys.length === o2Keys.length && o1Keys.every(key => o2Keys.includes(key) && obj1[key] === obj2[key]);
  }
  
  componentDidMount() {
    this.props.executeSearch(this.props.searchParams);
  }

  componentDidUpdate(prevProps) {
    if (!this.compareObjsProps(prevProps.searchParams, this.props.searchParams)) {
      this.props.executeSearch(this.props.searchParams);
    }
  }

  render() {
    return (
      <div style={{marginTop: "20px"}}>
        <h1>{this.props.title}</h1>
        <hr/>
        <section className="col-xs-12 col-sm-6 col-md-12">
          <Paging onPageChange={this.props.onPageChange} currentPage={this.props.currentPage} totalPages={this.props.totalPages} />
          {this.props.movies.map((movie, index) => {
            return (
              <MovieListItem key={index} movie={movie}/>
            )
          })}		
        </section>
      </div>
    );
  }
}

export default MovieList;

