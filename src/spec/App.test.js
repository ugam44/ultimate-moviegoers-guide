import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from '../components/App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers";

it('renders without crashing', () => {
  const div = document.createElement('div');
  let store = createStore(rootReducer);

  render( 
    <Provider store={store}>
      <App/>
    </Provider>,
    div
  );
  unmountComponentAtNode(div);
});
