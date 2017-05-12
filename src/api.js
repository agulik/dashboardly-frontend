import superagent from 'superagent';
import { API_HOST } from './config';

class Api {

  requestSignUp = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/users`)
    .send({ email, password })
    .catch((e) => {
      console.log('error', e)
    })
  )

  requestLogin = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ email, password })
  )

  requestLogout = (token) => (
    superagent
    .delete(`${API_HOST}/auth/sessions`)
    .set('Authorization', `token ${token}`)
  )

  getBoardsList = (page, count) => (
    superagent
    .get(`${API_HOST}/boards`)
  )

  getBoard = (id) => (
    superagent
    .get(`${API_HOST}/boards/${id}`)
  )

  getBookmarks = (boardId) => (
    superagent
    .get(`${API_HOST}/boards/${boardId}/bookmarks`)
  )

  getUser = (token) => {
    return superagent
    .get(`${API_HOST}/auth/me`)
    // .send({token})
    // .set('Authorization', `token ${token}`)
    // .set('Accept', 'application/json')
  }

  createBoard = (title, description) => {
        return superagent
        .post(`${API_HOST}/boards`)
        .send({title, description})
        .set('Authorization', `token ${localStorage.token}`)
        .set('Accept', 'application/json')
  }

  createBookmark = (url, name, description) => {
    console.log(url, name, description)
    // return this.getUser(localStorage.token)
    // .then((user) => {
      return superagent
      .post(`${API_HOST}/boards`)
      .send({url, name, description})
  }

}

export default new Api();
