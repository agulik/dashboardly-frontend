import api from './api';

module.exports = {

  // take in email and password
  // if email and password already exist in database, throw error
  // otherwise, send a post req to the api to sign up the user with that email and pass

  signup(email, pass) {
    if (localStorage.user) {
      throw new Error('User already exists!')
    } else {
      return api.requestSignUp(email, pass)
    }
  },

  login(email, pass) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
      return api.requestLogin(email, pass)
      .then(res => localStorage.token = res.body.token)
    }
  },

  getToken() {
    return localStorage.token
  },

  logout() {
    return api.requestLogout(localStorage.token)
    .then(res => delete localStorage.token)
  },

  isLoggedIn() {
    return !!localStorage.token
  },

}
