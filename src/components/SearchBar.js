import React from "react";
import MovieTypeButton from "../containers/MovieTypes";
import { GET_NOW_PLAYING, GET_POPULAR, GET_TOP_RATED } from "../actions";

let SearchBar = ({ onSearch, onTextInput, searchTerm }) => {

  let searchTermInput;

  let handleSubmit = (e) => {
    e.preventDefault();
    var searchTerm = searchTermInput.value.trim();
    if (searchTerm) {
      onSearch(searchTerm);
    }
  }

  let inputDebounceTimeout;
  let handleInput = (e) => {
    // if timeout hasn't triggered yet, reset timer
    if (inputDebounceTimeout) {
      clearTimeout(inputDebounceTimeout);
    }

    var searchTerm = searchTermInput.value.trim();
    if (searchTerm) {
      // debounce search to reduce network overhead so API isn't called for every rapid keystroke
      inputDebounceTimeout = setTimeout(() => {
        onTextInput(searchTerm);
      }, 500);
    }
  }

  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col">
        <label>
          Search: {' '}
          <input type="text" ref={node => (searchTermInput = node)} onInput={handleInput} defaultValue={searchTerm}/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </label>
      </form>
      <div className="col">
        <MovieTypeButton filter="NOW_PLAYING">Now Playing</MovieTypeButton>
        <MovieTypeButton filter="POPULAR">Popular</MovieTypeButton>
        <MovieTypeButton filter="TOP_RATED">Top Rated</MovieTypeButton>
      </div>
    </div>
  );
}

export default SearchBar;