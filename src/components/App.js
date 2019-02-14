import React from 'react';
import { connect } from "react-redux";
import logo from '../assets/images/logo.svg';
import { changeName } from "../actions";
import '../assets/styles/App.css';
var api_key = "89835e8482c6060a7265d6ebd1e42cb4";

let App = ({dispatch, name}) => {

  let nameInput;

  let handleNameChange = (e) => {
    e.preventDefault();
    var newName = nameInput.value.trim();
    if (!newName) {
      return;
    }

    dispatch(changeName(newName));
    nameInput.value = "";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, {name}!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <form onSubmit={handleNameChange}>
            <label>
              Change Name: {' '}
              <input type="text" ref={node => (nameInput = node)}/>
              <button type="submit">Submit</button>
            </label>
          </form>
        </div>
      </header>
    </div>
  );
}

let mapStateToProps = (state) => ({ name: state.name });

export default connect(mapStateToProps)(App);
