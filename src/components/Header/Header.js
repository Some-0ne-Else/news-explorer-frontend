import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function Header({
  isLoggedIn,
  isMobileMenu,
  isMobileMenuOpen,
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
  // if(isMobileMenu){
  //   return (
  //     <section className={header}>
  //       <div className="header__wrapper">
  //         <h1 className="header__title">
  //           <Link to="/" className={headerLink}>
  //             NewsExplorer
  //           </Link>
  //         </h1>
  //         <MobileNavigation
  //           isMobileMenuOpen={isMobileMenuOpen}
  //           handleMobileMenuClick={handleMobileMenuClick}
  //           isLoggedIn={isLoggedIn}
  //           isSavedNews={isSavedNews}
  //           userName="Грета"
  //           loginButtonHandler={loginButtonHandler}
  //           handleLogout={handleLogout}
  //         />
  //       </div>
  //     </section>
  //   );

  // }
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
          isSavedNews={isSavedNews}
          userName="Грета"
          loginButtonHandler={loginButtonHandler}
          handleLogout={handleLogout}
        />
      </div>
    </section>
  );
}

export default Header;
