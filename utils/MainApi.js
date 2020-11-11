import { baseUrl, token } from "./Constants.js";

class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  signIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
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
    return fetch(`${this._baseAuthUrl}${this._signUpPostfix}`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
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
}
