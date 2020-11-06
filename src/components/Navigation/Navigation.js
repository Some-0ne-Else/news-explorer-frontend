import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import exitButtonImage from '../../images/logout.png';
import exitButtonImageThemeWhite from '../../images/logout_theme_white.png';

function Navigation({ isLoggedIn, userName, isSavedNews }) {
  let navigationMenuLink = 'navigation__menu-link';
  let navigationMenuLinkActive = 'navigation__menu-link_active';
  let navigationMenuItem = 'navigation__menu-item';
  let exitImg = exitButtonImage;
  if (isSavedNews) {
    navigationMenuLink =
      'navigation__menu-link navigation__menu-link_theme_white';
    console.log(navigationMenuLink);
    navigationMenuLinkActive =
      'navigation__menu-link_active navigation__menu-link_active_theme_white';
    navigationMenuItem =
      'navigation__menu-item navigation__menu-item_theme_white';
    exitImg = exitButtonImageThemeWhite;
  }

  if (isLoggedIn) {
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
            <NavLink
              exact
              to="/sign-out"
              className={navigationMenuLink}
              activeClassName={navigationMenuLinkActive}
            >
              {userName}
              <img alt="Иконка выхода" src={exitImg} />
            </NavLink>
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
          <NavLink
            exact
            to="/sign-in"
            className={navigationMenuLink}
            activeClassName={navigationMenuLinkActive}
          >
            Авторизоваться
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
