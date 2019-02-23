import React from "react";

let Paging = ({ onPageChange, currentPage, totalPages }) => {
  let handlePageChange = (event, page) => {
    // if valid page, and not same as current, and not disabled, then allow the page change
    if (page !== "..." && !event.target.classList.contains("disabled")) {
      onPageChange(page);
    }
  }

  let getPaging = () => {
    var startPage = Math.max(1, currentPage - 1);
    var endPage = Math.min(totalPages, Math.max(startPage + 2, currentPage + 1));
    var pages = [];
    for (var i = startPage; i <= endPage; i++) {
      pages.push(i);
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
    <nav>
      <ul className="pagination">
        <li className={"page-item " + (currentPage === 1 ? "disabled" : "")} onClick={(e) => handlePageChange(e, 1)}>
          <a className="page-link" href="#">First</a>
        </li>
        <li className={"page-item " + (currentPage === 1 ? "disabled" : "")} onClick={(e) => handlePageChange(e, --currentPage)}>
          <a className="page-link" href="#">&lt;&lt;</a>
        </li>
        {getPaging()}
        <li className={"page-item " + (currentPage === totalPages ? "disabled" : "")} onClick={(e) => handlePageChange(e, ++currentPage)}>
          <a className="page-link" href="#">&gt;&gt;</a>
        </li>
        <li className={"page-item " + (currentPage === totalPages ? "disabled" : "")} onClick={(e) => handlePageChange(e, totalPages)}>
          <a className="page-link" href="#">Last</a>
        </li>
      </ul>
    </nav>
  )
}

export default Paging;