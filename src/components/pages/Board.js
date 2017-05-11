import React, {Component} from 'react';
import api from '../../api';
import BookmarkCard from '../elements/BookmarkCard';
import AddButton from '../elements/AddButton';
import CreateBookmark from '../modals/CreateBookmark';
import auth from '../../auth';
import './Board.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      bookmarks: [],
      updatedAt: "",
      isCreateBookmarkOpen: false
    };
  }

  componentDidMount() {
    this.fetchBoardData()
  }

  fetchBoardData = () => {
      Promise.all([
        api.getBoard(this.props.params.id),
        api.getBookmarks(this.props.params.id)
      ])
      .then(res => {
        this.setState({
          title: res[0].body.title,
          description: res[0].body.description,
          bookmarks: res[1].body.bookmarks
        })
      })
      .catch(console.error)
  }

  _handleAddButtonClick = () => {
    let { isCreateBookmarkOpen } = this.state;

    this.setState({ isCreateBookmarkOpen: !isCreateBookmarkOpen })
  }

  closeCreateBookmark = () => this.setState({ isCreateBookmarkOpen: false })

  render() {
    let { bookmarks, isCreateBookmarkOpen } = this.state
    return (
      <div className="board">
        { bookmarks.map(b =>
          <BookmarkCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            url={b.url}
          />
        )}

        {auth.isLoggedIn() ? <AddButton _handleAddButtonClick={this._handleAddButtonClick} /> : null}

        { isCreateBookmarkOpen ? <CreateBookmark closeCreateBookmark={this.closeCreateBookmark} /> : null}

      </div>
    );
  }

}
