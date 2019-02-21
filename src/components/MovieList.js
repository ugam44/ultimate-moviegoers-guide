import React from "react";
import MovieListItem from "./MovieListItem";
import "../assets/styles/MovieList.css";

let MovieList = ({movies, currentPage, totalPages, totalResults, searchTerm, onPageChange, filter}) => {
  let handlePageChange = (event, page) => {
    // if valid page, and not same as current, and not disabled, then allow the page change
    if (page !== "..." && !event.target.classList.contains("disabled")) {
      onPageChange(page, filter);
    }
  }

  let getPaging = () => {
    var startPage = Math.max(1, currentPage - 2);
    var endPage = Math.min(totalPages, Math.max(startPage + 2, currentPage + 1));
    var pages = [];
    if (startPage > 1) {
      pages.push(1);
      pages.push("...");
    }
    for (var i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    if (totalPages > endPage) {
      pages.push("...");
      pages.push(totalPages);
    }
    return (
      pages.map((page, index) => (
        <li key={index} className={"page-item " + (currentPage === page ? 'active' : '')} onClick={(e) => handlePageChange(e, page)}>
          <a className="page-link" href="#">{page}</a>
        </li>
      ))
    )
  }

  return (
    <div style={{marginTop: "20px"}}>
      <hgroup style={{marginBottom: "20px"}}>
        <h1>Search Results</h1>
        <h2 className="lead"><strong className="text-danger">{totalResults}</strong> results were found for <strong className="text-danger">{searchTerm}</strong></h2>								
      </hgroup>
      <section className="col-xs-12 col-sm-6 col-md-12">
      <nav>
        <ul className="pagination">
          <li className={"page-item " + (currentPage === 1 ? "disabled" : "")} onClick={(e) => handlePageChange(e, --currentPage)}>
            <a className="page-link" href="#">Previous</a>
          </li>
          {getPaging()}
          <li className={"page-item " + (currentPage === totalPages ? "disabled" : "")} onClick={(e) => handlePageChange(e, ++currentPage)}>
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
        {movies.map((movie, index) => {
          return (
            <MovieListItem key={index} movie={movie}/>
          )
        })}		
      </section>
    </div>
  );
}

export default MovieList;

