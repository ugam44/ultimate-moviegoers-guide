import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";
import { getMovies } from "./actions";

let store = createStore(rootReducer);

render( 
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getMovies());
