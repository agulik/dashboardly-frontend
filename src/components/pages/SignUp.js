import React, {Component} from 'react';
import auth from '../../auth';
import './SignUp.css';

const ENTER = 13;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleSignUp = () => {
    let { email: {value: email}, password: {value: password} } = this.refs;

    if (email && password) {
      auth.signup(email, password)
      .then(res => this.props.router.push('/login'))
      .catch(console.error);
    }
    else {
      this.setState({ error: "Please enter both an email and password"});
    }
  }

  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: null });
    }
    if (e.keyCode===ENTER) {
      this._handleSignUp();
    }
  }

  render() {
    let {error} = this.state;
    return (

      <div>
        <span>{error}</span>
        <div className="signup">
          <input type="text" ref="email" placeholder="example@gmail.com"
            onKeyUp={this._handleTyping}
          />
          <input type="password" ref="password" placeholder="password"
            onKeyUp={this._handleTyping}
          />
          <button onClick={this._handleSignUp}>sign up</button>
        </div>
      </div>
    );
  }

}
