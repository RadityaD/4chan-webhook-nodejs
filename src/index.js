import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCU7T0ukLDbY2Tnpe8umM8jNjbJhrJdTG4",
    authDomain: "ch-bot-8ce4a.firebaseapp.com",
    databaseURL: "https://ch-bot-8ce4a.firebaseio.com",
    storageBucket: "ch-bot-8ce4a.appspot.com",
    messagingSenderId: "398036225960"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
