import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardSelection from './BoardSelection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>4Chan Webhook Node Js Version</h1>
        </div>
        <BoardSelection />
      </div>
    );
  }
}

export default App;
