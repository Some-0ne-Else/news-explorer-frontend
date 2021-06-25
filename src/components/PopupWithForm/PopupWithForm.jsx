import React from 'react';
import './PopupWithForm.css';
import PropTypes from 'prop-types';

function PopupWithForm({
  name,
  title,
  onClose,
  onSubmit,
  isOpen,
  actionCaption,
  children,
  buttonName,
  buttonHandler,
  isValid,
}) {
  return (
    <section className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      <form
        className={`popup__form popup__form_${name}`}
        onSubmit={onSubmit}
        noValidate
      >
        <h2 className="popup__heading">{title}</h2>
        <button
          aria-label="close"
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
        {children}
        {isValid ? (
          <button
            type="submit"
            className={`popup__action-button popup__action-button_${name}`}
          >
            {actionCaption}
          </button>
        ) : (
          <button
            disabled
            type="submit"
            className={`popup__action-button popup__action-button_${name}`}
          >
            {actionCaption}
          </button>
        )}

        <p className="popup__option">
          или
          <button
            type="button"
            onClick={buttonHandler}
            className="popup__versa-button"
          >
            {buttonName}
          </button>
        </p>
      </form>
    </section>
  );
}
export default PopupWithForm;

PopupWithForm.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  actionCaption: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  buttonName: PropTypes.string.isRequired,
  buttonHandler: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};
