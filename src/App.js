import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardSelection from './BoardSelection';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      posts: [],
      boards: [],
      bs: '4Chan Webhook 2017 with React and Node'
    };
  }

  handleChange(event) {
    this.setState({bs: event.target['data-title']});
    var url = 'http://localhost:3001/threads/'+event.target.value;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        const posts = json;
        console.log(json);
      });
  }

  componentDidMount() {
    fetch('http://localhost:3001/boards')
      .then(res => res.json())
      .then(json => {
        const posts = json.boards.map(obj => obj);
        this.setState({ boards: posts });
        console.log(this.state.boards.id)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>{this.state.bs}</h1>
        </div>

        <BoardSelection title={this.state.boards} handler={this.handleChange} />
      </div>
    );
  }
}

export default App;
