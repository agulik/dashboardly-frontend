import React, { Component } from 'react';
import { Link } from 'react-router';
import onClickOutside from 'react-onclickoutside';
import auth from '../../auth';
import './Menu.css';
import Logout from './Logout.js';


class Menu extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleClickOutside = () => {
    this.props.closeMenu();
  }

  render() {
    let { closeMenu, show, user } = this.props;
    const isLoggedIn = auth.isLoggedIn();

    if (user) {
      return (
        <div className={`menu ${show?"show":""}`}>

          <div className="menu__header">
            <img src={user.body.avatarUrl} alt="profile-pic" className="menu__avatar"/>
          </div>

          <div className="menu__list">

            <Link to="/" className="menu__item" onClick={closeMenu}>
              Home
            </Link>

            {!isLoggedIn ?
              <Link to="/login" className="menu__item" onClick={closeMenu}>
                Login
              </Link>
            : null}

            {!isLoggedIn ?
              <Link to="/signup" className="menu__item" onClick={closeMenu}>
                Signup
              </Link>
            : null}

            {isLoggedIn ?
              <Logout className="menu__item" onClick={closeMenu}/>
            : null}
          </div>

        </div>
      );
    }
    return (
      <div className={`menu ${show?"show":""}`}>

        <div className="menu__header">
          <img src="user.avatarUrl" alt="profile-pic" className="menu__avatar"/>
        </div>

        <div className="menu__list">

          <Link to="/" className="menu__item" onClick={closeMenu}>
            Home
          </Link>

          {!isLoggedIn ?
            <Link to="/login" className="menu__item" onClick={closeMenu}>
              Login
            </Link>
          : null}

          {!isLoggedIn ?
            <Link to="/signup" className="menu__item" onClick={closeMenu}>
              Signup
            </Link>
          : null}

          {isLoggedIn ?
            <Logout className="menu__item" onClick={closeMenu}/>
          : null}
        </div>

      </div>
    );
  }

}

export default onClickOutside(Menu);
