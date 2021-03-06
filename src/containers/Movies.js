import React from "react";
import { Route } from "react-router-dom";
import NowPlaying from "./NowPlaying";
import SelectedMovie from "./SelectedMovie";
import Popular from "./Popular";
import TopRated from "./TopRated";

let Movies = ({ match }) => {
  return (
    <div>
      <Route path={`${match.url}/now-playing`} component={NowPlaying}/>
      <Route path={`${match.url}/popular`} component={Popular}/>
      <Route path={`${match.url}/top-rated`} component={TopRated}/>
      <Route path={`${match.url}/:movie_id/details`} component={SelectedMovie} />
    </div>
  )
};

export default Movies;