import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/font-awesome-4.7.0/css/font-awesome.min.css";
import "./index.css";
import App from "./components/App";
import dataService from "./services/data-service";

let store = createStore(rootReducer, {}, applyMiddleware(dataService));

render( 
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

// store.dispatch(getMovies("Foo"));
