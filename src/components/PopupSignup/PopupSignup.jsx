import React from 'react';
import PropTypes from 'prop-types';
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
  const signupFormValidation = useFormWithValidation();
  const [actionError, setActionError] = React.useState('');

  function submitHandler(e) {
    e.preventDefault();
    api
      .signUp(
        signupFormValidation.values.email,
        signupFormValidation.values.password,
        signupFormValidation.values.name,
      )
      .then((res) => {
        if (res.email) {
          handleSignUp();
          e.target.closest('form').reset();
          signupFormValidation.resetForm(e);
        } else {
          setActionError(res.message);
        }
      });
  }

  function closePopup(e) {
    e.target.closest('form').reset();
    signupFormValidation.resetForm(e);
    setActionError('');
    onClose();
  }
  return (
    <PopupWithForm
      name="sign-up"
      title="Регистрация"
      actionCaption="Зарегистрироваться"
      isOpen={isSignUpPopupOpen}
      buttonName="Войти"
      buttonHandler={loginButtonHandler}
      onClose={closePopup}
      onSubmit={submitHandler}
      isValid={signupFormValidation.isValid}
    >
      <p className="popup__caption">Email</p>
      <input
        type="email"
        className="popup__input"
        name="email"
        placeholder="Введите почту"
        required
        onChange={signupFormValidation.handleChange}
      />
      <p className="popup__input-error" name="email-error">
        {signupFormValidation.errors.email}
      </p>
      <p className="popup__caption">Пароль</p>
      <input
        type="password"
        className="popup__input"
        name="password"
        placeholder="Введите пароль"
        required
        onChange={signupFormValidation.handleChange}
      />
      <p className="popup__input-error" name="password-error">
        {signupFormValidation.errors.password}
      </p>
      <p className="popup__caption">Имя</p>
      <input
        type="text"
        className="popup__input"
        name="name"
        placeholder="Введите своё имя"
        minLength="2"
        required
        onChange={signupFormValidation.handleChange}
      />
      <p className="popup__input-error" name="name-error">
        {signupFormValidation.errors.name}
      </p>
      <p className="popup__action-error" name="action-error">
        {actionError}
      </p>
    </PopupWithForm>
  );
}

export default PopupSignup;

PopupSignup.propTypes = {
  isSignUpPopupOpen: PropTypes.bool.isRequired,
  loginButtonHandler: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};
