import React, {Component} from 'react';
import api from '../../api';
import './CreateBookmark.css';

const ENTER = 13;

export default class CreateBoookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleCreateBookmark = () => {
    let { url: {value: url}, name: {value: name}, description: {value: description} } = this.refs;

    if (url && name && description) {
      api.createBookmark(url, name, description)
      .then(res => console.log(res)
      // this.props.router.push('/')
    )
      .catch(console.error)
    }
    else {
      this.setState({ error: "Please enter a url, name and description"})
    }
    this.props.closeCreateBookmark();
  }

  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: null })
    }
    if (e.keyCode===ENTER) {
      this._handleCreateBookmark()
    }
  }

  render() {
    let {error} = this.state;
    return (
      <div className='create_bookmark'>
        <h1>Create New Bookmark</h1>
        <span>{error}</span>
        <input type="text" ref="url" placeholder="www.instagram.com"
          onKeyUp={this._handleTyping}
        />
        <input type="text" ref="name" placeholder="Instagram"
          onKeyUp={this._handleTyping}
        />
        <input type="text" ref="description" placeholder="Instagram is a photo sharing application"
          onKeyUp={this._handleTyping}
        />
        <button onClick={this._handleCreateBookmark}>Create</button>
      </div>
    );
  }

}
