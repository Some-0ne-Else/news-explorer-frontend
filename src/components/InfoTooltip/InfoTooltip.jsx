import React from 'react';
import './InfoTooltip.css';
import PropTypes from 'prop-types';

function InfoTooltip({ isOpen, onLogin, onClose }) {
  return (
    <section className={`info-tooltip ${isOpen && 'info-tooltip_opened'}`}>
      <div className="info-tooltip__container">
        <h2 className="info-tooltip__message">
          Пользователь успешно зарегистрирован!
        </h2>
        <button
          type="button"
          onClick={onLogin}
          className="info-tooltip__login-button"
        >
          Войти
        </button>
        <button
          aria-label="close"
          type="button"
          className="info-tooltip__close-button"
          onClick={onClose}
        />
      </div>
    </section>
  );
}
export default InfoTooltip;
InfoTooltip.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
