import * as actions from "../actions";
import movies from "./movies";

let defaultState = {searchResults: {}, loading: false};
let searchResultsSeed = {
  "/movies/now-playing": {
    currentPage: 1,
    movies: [],
    totalPages: 1,
    totalResults: 1,
    searchParams: {page: 1},
    initiator: "/movies/now-playing",
    isInvalid: false
  },
  "/movies/popular": {
    currentPage: 1,
    movies: [],
    totalPages: 1,
    totalResults: 1,
    searchParams: {page: 2},
    initiator: "/movies/popular",
    isInvalid: false
  },
  "/genres/28-Action/movies": {
    currentPage: 1,
    movies: [],
    totalPages: 1,
    totalResults: 1,
    searchParams: {page: 1},
    initiator: "/genres/28-Action/movies",
    isInvalid: false
  },
  "/search/movies": {
    currentPage: 1,
    movies: [],
    totalPages: 1,
    totalResults: 1,
    searchParams: {page: 1, query: "Foo"},
    initiator: "/search/movies",
    isInvalid: false
  }
}

describe('movies reducer', () => {
  it('should handle initial state', () => {
    expect(movies(undefined, {})).toEqual(defaultState);
  });

  it('should set loading flag', () => {
    expect(movies(defaultState, actions.setLoading(true))).toEqual({...defaultState, loading: true});
    expect(movies(defaultState, actions.setLoading(false))).toEqual({...defaultState, loading: false});
  });

  it('should set search params for the first time on a given initiator', () => {
    expect(
      movies(defaultState, actions.setSearchParams("/test", {page: 1, query: "TestingTesting123"}))
    ).toEqual({...defaultState, searchResults: {"/test": {isInvalid: true, searchParams: {page: 1, query: "TestingTesting123"}}}});
  });

  it('should set search params on an existing initiator', () => {
    let state = {defaultState, searchResults: searchResultsSeed};
    let initiator = "/genres/28-Action/movies";
    expect(
      movies(state, actions.setSearchParams(initiator, {page: 5}))
    ).toEqual({...state, searchResults: {...state.searchResults, [initiator]: {...state.searchResults[initiator], isInvalid: true, searchParams: {page: 5}}}});
  });

  it('should set partial search params on an existing initiator', () => {
    let state = {defaultState, searchResults: searchResultsSeed};
    let initiator = "/search/movies";
    expect(
      movies(state, actions.setSearchParams(initiator, {query: "Bar"}))
    ).toEqual({...state, searchResults: {...state.searchResults, [initiator]: {...state.searchResults[initiator], isInvalid: true, searchParams: {page: 1, query: "Bar"}}}});
  });
})