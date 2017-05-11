import React, {Component} from 'react';
import './CreateBoard.css';

export default class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleCreateBoard = () => {
    let { title: {value: title}, description: {value: description} } = this.refs;

    if (title && descriptions) {
      auth.signup(email, password)
      .then(res => this.props.router.push('/boards/:id'))
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
      this._handleSignUp()
    }
  }

  render() {
    return (
      <div className='create_board'>
        <h1>Create New Board</h1>
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
