import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from '../components/App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers";
import dataService from "../services/data-service";
import { BrowserRouter as Router, Route } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  let store = createStore(rootReducer, {}, applyMiddleware(dataService));

  render( 
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}/>
      </Router>
    </Provider>,
    div
  );
  unmountComponentAtNode(div);
});
