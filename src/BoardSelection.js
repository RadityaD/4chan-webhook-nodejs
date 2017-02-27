import React, { Component } from 'react';

class BoardSelection extends Component {

	constructor(props) {
    super(props);
    this.state = {
      posts: [],
      boards: [] 
    };
  }

  componentDidMount() {
    fetch('http://localhost/boards')
      .then(res => res.json())
      .then(json => {
        const posts = json.boards.map(obj => obj);
        this.setState({ boards: posts });
        console.log(this.state.boards.id)
      });
  }
	
	render(){ 
		return(
      <div>
        <select>
          <option>Selection</option>
          {this.state.boards.map((post, index) =>
            <option key={index}>{post.id}{post.title}</option>
          )}
        </select>
      </div>
		);
	}	
}


export default BoardSelection;