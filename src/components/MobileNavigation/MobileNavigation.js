import React from 'react';
import { Link } from 'react-router-dom';
import './MobileNavigation.css';

function MobileNavigation({
  isMobileMenuOpen,
  loginButtonHandler,
  handleMobileMenuClick,
}) {
  if (isMobileMenuOpen) {
    return (
      <div className="mobile-navigation">
        <button
          className="mobile-navigation__close-button"
          type="button"
          onClick={handleMobileMenuClick}
        ></button>
        <nav className="mobile-navigation__container">
          <ul className="mobile-navigation__menu">
            <li className="mobile-navigation__menu-item">
              <Link to="/" className="mobile-navigation__menu-link">
                Главная
              </Link>
            </li>
            <li className="mobile-navigation__menu-item">
              <button
                type="button"
                onClick={loginButtonHandler}
                className="mobile-navigation__menu-button"
              >
                Авторизоваться
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <button
      className="mobile-navigation__open-button"
      type="button"
      onClick={handleMobileMenuClick}
    ></button>
  );
}

export default MobileNavigation;
