import React, {Component} from 'react';
import './CreateBoard.css';

export default class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='modal'>
        <h1>Create New Board</h1>
        <p>Title</p>
        <p>Description</p>
      </div>
    );
  }

}
