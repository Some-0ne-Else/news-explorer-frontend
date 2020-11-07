import React from 'react';
import './PopupLogin.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupLogin({
  isLoginPopupOpen,
  registerButtonHandler,
  onClose,
  onSubmit,
}) {
  function submitHandler(e) {
    e.preventDefault();
    onSubmit();
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
      />
      <p className="popup__caption">Пароль</p>
      <input
        type="password"
        className="popup__input"
        name="password"
        id="password"
        placeholder="Введите пароль"
        required
      />
    </PopupWithForm>
  );
}

export default PopupLogin;
