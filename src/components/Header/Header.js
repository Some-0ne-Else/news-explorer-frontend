import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({
  isLoggedIn,
  userName,
  isMobileMenu,
  handleMobileMenuClick,
  loginButtonHandler,
  handleLogout,
  isSavedNews,
}) {
  let headerLink = 'header__link';
  let header = 'header';
  if (isSavedNews) {
    headerLink = 'header__link header__link_theme_white';
    header = 'header header_theme_white';
  }
  return (
    <section className={header}>
      <div className="header__wrapper">
        <h1 className="header__title">
          <Link to="/" className={headerLink}>
            NewsExplorer
          </Link>
        </h1>
        <Navigation
          isLoggedIn={isLoggedIn}
          isMobileMenu={isMobileMenu}
          handleMobileMenuClick={handleMobileMenuClick}
          isSavedNews={isSavedNews}
          userName={userName}
          loginButtonHandler={loginButtonHandler}
          handleLogout={handleLogout}
        />
      </div>
    </section>
  );
}

export default Header;
