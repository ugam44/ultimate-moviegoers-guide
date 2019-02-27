import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from '../components/App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers";
import dataService from "../services/data-service";
import movieService from "../services/movie-service";
import { XhrService } from "../services/xhr-service";
import { BrowserRouter as Router, Route } from "react-router-dom";
let xhr = new XhrService();
let _movieService = movieService({xhrService: xhr});


it('renders with services, routing, and middleware', () => {
  const div = document.createElement('div');
  let store = createStore(rootReducer, {}, applyMiddleware(dataService({movieService: _movieService})));

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
