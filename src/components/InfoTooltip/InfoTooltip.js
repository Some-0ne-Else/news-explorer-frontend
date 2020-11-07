import React from 'react';
import './InfoTooltip.css';

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
          type="button"
          className="info-tooltip__close-button"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}
export default InfoTooltip;
