import React, {Component} from 'react';
import api from '../../api';
import './CreateBoard.css';

const ENTER = 13;

export default class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleCreateBoard = () => {
    let { title: {value: title}, description: {value: description} } = this.refs;

    if (title && description) {
      api.createBoard(title, description)
      .then(res => console.log(res))
        // this.props.router.push('/boards'))
      .catch(console.error)
    }
    else {
      this.setState({ error: "Please enter both a title and description"})
    }
  }

  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: null })
    }
    if (e.keyCode===ENTER) {
      this._handleCreateBoard()
    }
  }

  render() {
    let {error} = this.state
    return (

      <div className='create_board'>
        <h1>Create New Board</h1>
        <span>{error}</span>
        <input type="text" ref="title" placeholder="Title"
          onKeyUp={this._handleTyping}
        />
        <input type="text" ref="description" placeholder="Description"
          onKeyUp={this._handleTyping}
        />
        <button onClick={this._handleCreateBoard}>Create</button>
      </div>
    );
  }

}
