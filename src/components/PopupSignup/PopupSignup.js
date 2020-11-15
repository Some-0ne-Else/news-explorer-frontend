import React from 'react';
import './PopupSignup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import api from '../../utils/MainApi';
import { useFormWithValidation } from '../Validation/Validation';

function PopupSignup({
  isSignUpPopupOpen,
  loginButtonHandler,
  onClose,
  handleSignUp,
}) {
  const SignupFormValidation = useFormWithValidation();
  const [actionError, setActionError] = React.useState('');

  const emailRef = React.useRef('');
  const passwordRef = React.useRef('');
  const nameRef = React.useRef('');

  function handleEmailChange(e) {
    emailRef.current = e.target.value;
  }

  function handlePasswordChange(e) {
    passwordRef.current = e.target.value;
  }

  function handleNameChange(e) {
    nameRef.current = e.target.value;
  }

  function submitHandler(e) {
    e.preventDefault();
    api
      .signUp(emailRef.current, passwordRef.current, nameRef.current)
      .then((res) => {
        res.email ? handleSignUp() : console.log(res);
      });
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
        onChange={handleEmailChange}
      />
      <p className="popup__input-error" name="email-error">
        {loginFormValidation.errors.email}
      </p>
      <p className="popup__caption">Пароль</p>
      <input
        type="password"
        className="popup__input"
        name="password-signup"
        id="password-signup"
        placeholder="Введите пароль"
        required
        onChange={handlePasswordChange}
      />
      <p className="popup__caption">Имя</p>
      <input
        type="text"
        className="popup__input"
        name="name"
        id="name"
        placeholder="Введите своё имя"
        required
        onChange={handleNameChange}
      />
    </PopupWithForm>
  );
}

export default PopupSignup;
