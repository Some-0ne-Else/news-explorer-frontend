import React from 'react';
import './PopupSignup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupSignup({
  isSignUpPopupOpen,
  loginButtonHandler,
  onClose,
  onSubmit,
}) {
  function submitHandler(e) {
    e.preventDefault();
    onSubmit();
  }
  return (
    <PopupWithForm
      name="sign-up"
      title="Регистрация"
      actionCaption="Зарегистрироваться"
      isOpen={isSignUpPopupOpen}
      buttonName="Войти"
      buttonHandler={loginButtonHandler}
      onClose={onClose}
      onSubmit={submitHandler}
    >
      <p className="popup__caption">Email</p>
      <input
        type="email"
        className="popup__input"
        name="email-signup"
        id="email-signup"
        placeholder="Введите почту"
        required
      />
      <p className="popup__caption">Пароль</p>
      <input
        type="password"
        className="popup__input"
        name="password-signup"
        id="password-signup"
        placeholder="Введите пароль"
        required
      />
      <p className="popup__caption">Имя</p>
      <input
        type="text"
        className="popup__input"
        name="name"
        id="name"
        placeholder="Введите своё имя"
        required
      />
    </PopupWithForm>
  );
}

export default PopupSignup;
