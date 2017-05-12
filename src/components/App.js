import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './modals/Menu';
import api from '../api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
     }
  }

// when the component mounts, if the user is logged in,
// call the auth/me api endpoint and retrieve the user object
// pass the user object inside app as a prop user=user
// inside the menu component, use the user prop and extract the avatarurl from it
// insert the avatar url prop as the img src

  componentDidMount() {

    if(localStorage.token) {
      api.getUser()
      .then((user) => {
        this.setState({
          user: user
        })
      })

    }

  }

  closeMenu = () => this.setState({ isMenuOpen: false })

  render() {
    let {isMenuOpen, user} = this.state
    return (
      <div className="App">
        <div className="App-navbar">
          <i className="fa fa-bars fa-2x menu-icon"
            onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}
          />
          <Link to="/" className="App-navbar__title">Dashboardly</Link>
          <i className="fa fa-cog fa-2x settings-icon"/>
        </div>

        <Menu show={isMenuOpen} user={user} closeMenu={this.closeMenu}/>

        {this.props.children}

      </div>
    );
  }
}

export default App;
