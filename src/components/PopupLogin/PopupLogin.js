import React from 'react';
import './PopupLogin.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import api from '../../utils/MainApi';
import { useFormWithValidation } from '../Validation/Validation';

function PopupLogin({
  isLoginPopupOpen,
  registerButtonHandler,
  onClose,
  onLogin,
}) {
  const loginFormValidation = useFormWithValidation();
  const [actionError, setActionError] = React.useState('');

  function submitHandler(e) {
    e.preventDefault();
    api
      .signIn(
        loginFormValidation.values.email,
        loginFormValidation.values.password,
      )
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          api.checkToken(res.token).then((res) => {
            onLogin(res.data.name);
            loginFormValidation.resetForm();
            e.target.closest('form').reset();
          });
        } else {
          setActionError(res.message);
        }
      });
  }

  function closePopup(e) {
    e.target.closest('form').reset();
    loginFormValidation.resetForm(e);
    setActionError('');
    onClose();
  }

  return (
    <PopupWithForm
      name="login"
      title="Вход"
      actionCaption="Войти"
      isOpen={isLoginPopupOpen}
      buttonName="Зарегистрироваться"
      buttonHandler={registerButtonHandler}
      onClose={closePopup}
      onSubmit={submitHandler}
      isValid={loginFormValidation.isValid}
    >
      <p className="popup__caption">Email</p>
      <input
        type="email"
        className="popup__input"
        name="email"
        id="email"
        placeholder="Введите почту"
        required
        onChange={loginFormValidation.handleChange}
      />
      <p className="popup__input-error" name="email-error">
        {loginFormValidation.errors.email}
      </p>
      <p className="popup__caption">Пароль</p>
      <input
        type="password"
        className="popup__input"
        name="password"
        id="password"
        placeholder="Введите пароль"
        required
        onChange={loginFormValidation.handleChange}
      />
      <p className="popup__input-error" name="password-error">
        {loginFormValidation.errors.password}
      </p>
      <p className="popup__action-error" name="action-error">
        {actionError}
      </p>
    </PopupWithForm>
  );
}

export default PopupLogin;
