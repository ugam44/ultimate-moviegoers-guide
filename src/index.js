import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/font-awesome-4.7.0/css/font-awesome.min.css";
import "./index.css";
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import App from "./components/App";
import dataService from "./services/data-service";
import movieService from "./services/movie-service";
import { XhrService } from "./services/xhr-service";
import { BrowserRouter as Router, Route } from "react-router-dom";
let xhr = new XhrService();
let _movieService = movieService({xhrService: xhr});

let store = createStore(rootReducer, {}, applyMiddleware(dataService({movieService: _movieService})));

render( 
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
