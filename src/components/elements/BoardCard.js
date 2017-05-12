import React, {Component} from 'react';
import { Link } from 'react-router';
import './BoardCard.css';

export default class BoardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { title, description, id } = this.props
    return (
      <Link to={`/boards/${id}`}>
        <div className="board-card">
          <h2>{ title }</h2>
          <p>{ description }</p>
          <hr/>
        </div>
      </Link>
    );
  }

}
