import React, {Component} from 'react';
import api from '../../api';
import BoardCard from '../elements/BoardCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import CreateBoard from '../modals/CreateBoard';
import './Home.css';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      isCreateBoardOpen: false
    };
  }

  componentDidMount() {
    this._fetchBoards();
  }

  _fetchBoards = () => {
    api.getBoardsList()
    .then(res => {
      this.setState({ boards: res.body.boards })
    })
    .catch(console.error)
  }

  _handleAddButtonClick = () => {
    let {isCreateBoardOpen} = this.state;

    this.setState({ isCreateBoardOpen: !isCreateBoardOpen })
  }

  closeCreateBoard = () => this.setState({ isCreateBoardOpen: false })

  render() {
    let { boards, isCreateBoardOpen } = this.state
    return (
      <div className="home">
        <div>
          { boards.map(b =>
          <BoardCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            updatedAt={b.updatedAt}
          />
          )}
        </div>
        {auth.isLoggedIn() ? <AddButton _handleAddButtonClick={this._handleAddButtonClick} /> : null}

        { isCreateBoardOpen ? <CreateBoard closeCreateBoard={this.closeCreateBoard} /> : null}
      </div>
    );
  }

}
