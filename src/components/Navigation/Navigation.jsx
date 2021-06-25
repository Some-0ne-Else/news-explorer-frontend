import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigation.css';
import exitButtonImage from '../../images/logout.png';
import exitButtonImageThemeWhite from '../../images/logout_theme_white.png';
import CurrentUserContext from '../../contexts/CurrentUser';

function Navigation({
  isMobileMenu,
  handleMobileMenuClick,
  handleLogout,
  loginButtonHandler,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();
  let navigationMenuLink = 'navigation__menu-link';
  let navigationMenuLinkActive = 'navigation__menu-link_active';
  let navigationMenuItem = 'navigation__menu-item';
  let navigationMenuButton = 'navigation__menu-button';
  let navigationMobileButton = 'navigation__mobile-button';

  let exitImg = exitButtonImage;
  if (location.pathname === '/saved-news') {
    navigationMenuLink = 'navigation__menu-link navigation__menu-link_theme_white';
    navigationMenuLinkActive = 'navigation__menu-link_active navigation__menu-link_active_theme_white';
    navigationMenuItem = 'navigation__menu-item navigation__menu-item_theme_white';
    navigationMenuButton = 'navigation__menu-button navigation__menu-button_theme_white';
    navigationMobileButton = 'navigation__mobile-button navigation__mobile-button_theme_white';
    exitImg = exitButtonImageThemeWhite;
  }

  if (isMobileMenu) {
    return (
      <button
        type="button"
        aria-label="mobile-menu"
        className={navigationMobileButton}
        onClick={handleMobileMenuClick}
      />
    );
  }
  if (currentUser) {
    return (
      <nav className="navigation">
        <ul className="navigation__menu">
          <li className={navigationMenuItem}>
            <NavLink
              exact
              to="/"
              className={navigationMenuLink}
              activeClassName={navigationMenuLinkActive}
            >
              Главная
            </NavLink>
          </li>
          <li className={navigationMenuItem}>
            <NavLink
              exact
              to="/saved-news"
              className={navigationMenuLink}
              activeClassName={navigationMenuLinkActive}
            >
              Сохраненные статьи
            </NavLink>
          </li>
          <li className={navigationMenuItem}>
            <button type="button" className={navigationMenuButton} onClick={handleLogout}>
              {currentUser}
              <img alt="Иконка выхода" src={exitImg} />
            </button>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li className={navigationMenuItem}>
          <NavLink
            exact
            to="/"
            className={navigationMenuLink}
            activeClassName={navigationMenuLinkActive}
          >
            Главная
          </NavLink>
        </li>
        <li className={navigationMenuItem}>
          <button type="button" onClick={loginButtonHandler} className={navigationMenuButton}>
            Авторизоваться
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

Navigation.propTypes = {
  isMobileMenu: PropTypes.bool.isRequired,
  handleMobileMenuClick: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  loginButtonHandler: PropTypes.func.isRequired,
};
