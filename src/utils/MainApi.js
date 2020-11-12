import { baseUrl, token } from './Constants.js';

class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  signIn(email, password) {
    console.log(email);
    console.log(password);
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
}

const api = new Api(baseUrl, token);

export default api;
