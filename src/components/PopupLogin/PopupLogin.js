import React from 'react';
import './PopupLogin.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import api from '../../utils/MainApi';

function PopupLogin({
  isLoginPopupOpen,
  registerButtonHandler,
  onClose,
  onLogin,
  onAuthFail,
}) {
  const emailRef = React.useRef('');
  const passwordRef = React.useRef('');

  function handleEmailChange(e) {
    emailRef.current = e.target.value;
  }

  function handlePasswordChange(e) {
    passwordRef.current = e.target.value;
  }

  function submitHandler(e) {
    e.preventDefault();
    api.signIn(emailRef.current, passwordRef.current).then((res) => {
      if (res.token) {
        localStorage.setItem('jwt', res.token);
        api.checkToken(res.token).then((res) => {
          onLogin(res.data.name);
        });
      } else onAuthFail();
    });
  }

  return (
    <PopupWithForm
      name="login"
      title="Вход"
      actionCaption="Войти"
      isOpen={isLoginPopupOpen}
      buttonName="Зарегистрироваться"
      buttonHandler={registerButtonHandler}
      onClose={onClose}
      onSubmit={submitHandler}
    >
      <p className="popup__caption">Email</p>
      <input
        type="email"
        className="popup__input"
        name="email"
        id="email"
        placeholder="Введите почту"
        required
        onChange={handleEmailChange}
      />
      <p className="popup__caption">Пароль</p>
      <input
        type="password"
        className="popup__input"
        name="password"
        id="password"
        placeholder="Введите пароль"
        required
        onChange={handlePasswordChange}
      />
    </PopupWithForm>
  );
}

export default PopupLogin;
