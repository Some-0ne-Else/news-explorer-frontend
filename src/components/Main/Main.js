import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';
import newsApi from '../../utils/NewsApi';

function Main({
  DeactivateSavedNews,
  isLoggedIn,
  isMobileMenu,
  handleMobileMenuClick,
  loginButtonHandler,
  handleLogout,
}) {
  const [showSearchResults, setShowSearchResults] = React.useState(false);
  const [resultsArray, setResultsArray] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(3);
  const cardsPerStep = 3;

  React.useEffect(() => {
    DeactivateSavedNews();
  });

  function handleSearch(searchStr) {
    newsApi.search(searchStr).then((res) => {
      console.log('res articles', res);
      if (res.articles.length > 0 && res.status === 'ok') {
        setResultsArray(res.articles);
        setShowSearchResults(true);
      }
    });
  }

  function loadMore() {
    setCurrentIndex(currentIndex + cardsPerStep);
  }

  return (
    <section className="main">
      <Header
        DeactivateSavedNews={DeactivateSavedNews}
        isLoggedIn={isLoggedIn}
        isMobileMenu={isMobileMenu}
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
        <SearchForm handleSearch={handleSearch} />
      </div>

      {showSearchResults ? (
        <SearchResults
          resultsArray={resultsArray}
          currentIndex={currentIndex}
          loadMoreHandler={loadMore}
        />
      ) : null}
      <About />
      <Footer />
    </section>
  );
}

export default Main;
