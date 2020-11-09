import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';
/*FOR DEMO REASONS */
//import SearchResults from '../SearchResults/SearchResults';
// import Preloader from '../Preloader/Preloader';
// import NoResults from '../NoResults/NoResults';

function Main({
  isLoggedIn,
  isMobileMenu,
  isMobileMenuOpen,
  handleMobileMenuClick,
  loginButtonHandler,
  handleLogout,
}) {
  return (
    <section className="main">
      <Header
        isLoggedIn={isLoggedIn}
        isMobileMenu={isMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClick={handleMobileMenuClick}
        loginButtonHandler={loginButtonHandler}
        handleLogout={handleLogout}
        isSavedNews={false}
      />
      <div className="main__wrapper">
        <h2 className="main__title">Что творится в мире?</h2>
        <p className="main__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </p>
        {/* <SearchForm /> */}
      </div>
      {/* <Preloader/> */}
      {/* <NoResults/> */}
      {/* <SearchResults /> */}

      {/* <About /> */}
      {/* <Footer /> */}
    </section>
  );
}

export default Main;
