import React from 'react';
import auth from '../../auth';

class Logout extends React.Component {
  constructor () {
    super();
    this.state = {};
        
    }
    
    _handleLogout = () => {
      if (localStorage.token) {
        auth.logout()
        .then(localStorage.removeItem('token'))
        .catch(console.error);
      } 
    else {
      this.setState({ error: "You are not logged in!"});
    }
  }
    
  render() {
    return (
        <div>
            <a href="" onClick={this._handleLogout}><p>Logout</p></a>
        </div>
    );
  }
}

export default Logout;