import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';
import exitButtonImage from '../../images/logout.png';
import exitButtonImageThemeWhite from '../../images/logout_theme_white.png';
import { CurrentUserContext } from '../../contexts/CurrentUser';
import { useLocation } from 'react-router-dom';

function MobileMenu({ isOpen, handleLogout, loginButtonHandler, onClose }) {
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();

  let mobileMenuContainer = 'mobile-menu__container';
  let mobileMenuTitle = 'mobile-menu__title';
  let mobileMenuCloseButton = 'mobile-menu__close-button';
  let mobileMenuLink = 'mobile-menu__link';
  let mobileMenuMenuButton = 'mobile-menu__menu-button';
  let exitImg = exitButtonImage;

  if (location.pathname === '/saved-news') {
    mobileMenuContainer =
      'mobile-menu__container mobile-menu__container_theme_white';
    mobileMenuTitle = 'mobile-menu__title mobile-menu__title_theme_white';
    mobileMenuCloseButton =
      'mobile-menu__close-button mobile-menu__close-button_theme_white';
    mobileMenuLink = 'mobile-menu__link mobile-menu__link_theme_white';
    mobileMenuMenuButton =
      'mobile-menu__menu-button mobile-menu__menu-button_theme_white';

    exitImg = exitButtonImageThemeWhite;
  }
  if (currentUser) {
    return (
      <section className={`mobile-menu ${isOpen && 'mobile-menu_opened'}`}>
        <div className={mobileMenuContainer}>
          <div className="mobile-menu__header-wrapper">
            <Link className={mobileMenuTitle} to="/" onClick={onClose}>
              NewsExplorer
            </Link>
            <button
              type="button"
              className={mobileMenuCloseButton}
              onClick={onClose}
            ></button>
          </div>

          <nav className="mobile-menu__navigation">
            <ul className="mobile-menu__menu">
              <li className="mobile-menu__menu-item">
                <Link to="/" onClick={onClose} className={mobileMenuLink}>
                  Главная
                </Link>
              </li>
              <li className="mobile-menu__menu-item">
                <Link
                  to="/saved-news"
                  onClick={onClose}
                  className={mobileMenuLink}
                >
                  Сохраненные статьи
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className={mobileMenuMenuButton}
              onClick={handleLogout}
            >
              {currentUser}
              <img alt="Иконка выхода" src={exitImg} />
            </button>
          </nav>
        </div>
      </section>
    );
  }
  return (
    <section className={`mobile-menu ${isOpen && 'mobile-menu_opened'}`}>
      <div className={mobileMenuContainer}>
        <div className="mobile-menu__header-wrapper">
          <Link className={mobileMenuTitle} to="/" onClick={onClose}>
            NewsExplorer
          </Link>
          <button
            type="button"
            className={mobileMenuCloseButton}
            onClick={onClose}
          ></button>
        </div>

        <nav className="mobile-menu__navigation">
          <ul className="mobile-menu__menu">
            <li className="mobile-menu__menu-item">
              <Link to="/" onClick={onClose} className={mobileMenuLink}>
                Главная
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className={mobileMenuMenuButton}
            onClick={loginButtonHandler}
          >
            Авторизоваться
          </button>
        </nav>
      </div>
    </section>
  );
}
export default MobileMenu;
