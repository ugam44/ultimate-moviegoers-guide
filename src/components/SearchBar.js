import React from "react";

let SearchBar = ({ onSearch }) => {
  let searchTermInput;
  let inputDebounceTimeout;

  let handleSubmit = (e) => {
    e.preventDefault();
    if (inputDebounceTimeout) {
      clearTimeout(inputDebounceTimeout);
    }
    var searchTerm = searchTermInput.value.trim();
    if (searchTerm) {
      onSearch(searchTerm);
    }
  }

  let handleInput = (e) => {
    // // if timeout hasn't triggered yet, reset timer
    // if (inputDebounceTimeout) {
    //   clearTimeout(inputDebounceTimeout);
    // }

    // var searchTerm = searchTermInput.value.trim();
    // if (searchTerm) {
    //   // debounce search to reduce network overhead so API isn't called for every rapid keystroke
    //   inputDebounceTimeout = setTimeout(() => {
    //     onTextInput(searchTerm);
    //   }, 500);
    // }
  }

  return (
    <form className="form-inline mt-2 mt-md-0" onSubmit={handleSubmit}>
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" 
            ref={node => (searchTermInput = node)} onInput={handleInput} />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;