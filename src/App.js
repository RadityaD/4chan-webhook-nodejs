import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardSelection from './BoardSelection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <BoardSelection />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> Berak and save to reload.
        </p>
      </div>
    );
  }
}

export default App;