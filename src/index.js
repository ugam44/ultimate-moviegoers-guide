import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import App from "./components/App";
import dataService from "./services/data-service";
import { getMovies } from "./actions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/font-awesome-4.7.0/css/font-awesome.min.css";
import "./index.css";

let store = createStore(rootReducer, {}, applyMiddleware(dataService));

render( 
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getMovies({movieFilter: "HOME"}));
