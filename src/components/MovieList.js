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
    if (this.props.data.isInvalid) {
      this.props.executeSearch(this.props.data.searchParams);
    }
  }

  componentDidUpdate(prevProps) {
    console.log("here");
    if (!this.compareObjsProps(prevProps.data.searchParams, this.props.data.searchParams)) {
      this.props.executeSearch(this.props.data.searchParams);
    }
  }

  render() {
    let { loading, title, onPageChange, data:  { currentPage, totalPages, movies } } = this.props;
    return (
      <div style={{marginTop: "20px"}}>
        {title && (
          <div>
            <h1>{title}</h1>
            <hr/>
          </div>
        )}
        {!loading && (
          <section className="col-xs-12 col-sm-6 col-md-12">
            <Paging onPageChange={onPageChange} currentPage={currentPage} totalPages={totalPages} />
            {movies.map((movie, index) => {
              return (
                <MovieListItem key={index} movie={movie}/>
              )
            })}		
          </section>
        )}
        {loading && (
          <section className="col-12" style={{textAlign: "center"}}>
            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
          </section>
        )}
      </div>
    );
  }
}

export default MovieList;

