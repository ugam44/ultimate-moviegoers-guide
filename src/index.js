import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./index.css";
import App from "./components/App";

let store = createStore(rootReducer);

render( 
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
