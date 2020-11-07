import React from 'react';
import './PopupWithForm.css';

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
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        {children}

        <button
          type="submit"
          className={`popup__action-button popup__action-button_${name}`}
        >
          {actionCaption}
        </button>
        <p className="popup__option">
          {' '}
          или{' '}
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
