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

  // you can't add an event handler to a component itself (in this case add button)
  // you have to pass in the event handler function as a prop to the component
  // inside that component, you import props and add an onclick event to the div
  // you then assign the props value function to that onclick event
  // the onclick event inside the add button then fires the event handler function in this component

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
