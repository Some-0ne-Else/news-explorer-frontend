/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { baseUrl, token } from './Constants';

class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  signIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: `${password}`,
        email: `${email}`,
      }),
    })
      .then((result) => result.json())
      .catch((err) => {
        console.log(err);
      });
  }

  signUp(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: `${password}`,
        email: `${email}`,
        name: `${name}`,
      }),
    })
      .then((result) => result.json())
      .catch((err) => {
        console.log(err);
      });
  }

  checkToken(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((result) => result.json())
      .catch((err) => {
        console.log(err);
      });
  }

  getArticles(jwt) {
    return fetch(`${this._baseUrl}/articles`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    })
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(`Ошибка: ${result.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postArticle(jwt, keyword, title, text, date, source, link, image) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword: `${keyword}`,
        title: `${title}`,
        text: `${text}`,
        date: `${date}`,
        source: `${source}`,
        link: `${link}`,
        image: `${image}`,
      }),
    })
      .then((result) => result.json())
      .catch((err) => {
        console.log(err);
      });
  }

  deleteArticle(jwt, id) {
    return fetch(`${this._baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    }).catch((err) => {
      console.log(err);
    });
  }
}

const api = new Api(baseUrl, token);

export default api;
