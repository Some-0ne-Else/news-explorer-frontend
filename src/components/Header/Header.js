import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({
  isMobileMenu,
  handleMobileMenuClick,
  loginButtonHandler,
  handleLogout,
}) {
  const location = useLocation();
  let headerLink = 'header__link';
  let header = 'header';
  if (location.pathname === '/saved-news') {
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
          isMobileMenu={isMobileMenu}
          handleMobileMenuClick={handleMobileMenuClick}
          loginButtonHandler={loginButtonHandler}
          handleLogout={handleLogout}
        />
      </div>
    </section>
  );
}

export default Header;
