import React, { Component, PropTypes } from 'react';
import './BoardSelection.css';

class BoardSelection extends Component {
  static propTypes = {
    title: PropTypes.array,
    handler: PropTypes.func
  }

	render(){ 
		return(
      <div className="BoardComp">
        <select onChange={this.props.handler}>
          <option>Selection</option>
          {this.props.title.map((post, index) =>
            <option value={post.board} key={index}>{post.title}</option>
          )}
        </select>
      </div>
		);
	}	
}


export default BoardSelection;