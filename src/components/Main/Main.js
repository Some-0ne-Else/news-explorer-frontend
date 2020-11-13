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
import api from '../../utils/MainApi';

function Main({
  DeactivateSavedNews,
  isLoggedIn,
  isMobileMenu,
  handleMobileMenuClick,
  loginButtonHandler,
  handleLogout,
  lastSearchRequest,
  setLastSearchRequest,
}) {
  const [showSearchResults, setShowSearchResults] = React.useState(false);
  const [resultsArray, setResultsArray] = React.useState([]);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(3);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNoResults, setIsNoResults] = React.useState(false);
  const cardsPerStep = 3;

  React.useEffect(() => {
    DeactivateSavedNews();
  });

  React.useEffect(() => {
    if (localStorage.getItem('searchResult')) {
      setResultsArray(JSON.parse(localStorage.getItem('searchResult')));
      setShowSearchResults(true);
      api.getArticles(localStorage.getItem('jwt')).then((res) => {
        console.log('SavedArticles', res);
        setSavedArticles(res);
      });
    }
  }, []);

  function handleSearch(searchStr) {
    setShowSearchResults(false);
    setIsNoResults(false);
    setIsLoading(true);
    setLastSearchRequest(searchStr);
    newsApi.search(searchStr).then((res) => {
      console.log('res articles', res);
      if (res.articles.length > 0 && res.status === 'ok') {
        localStorage.setItem('searchResult', JSON.stringify(res.articles));
        setResultsArray(res.articles);
        setIsLoading(false);
        setShowSearchResults(true);
      } else {
        setIsLoading(false);
        setIsNoResults(true);
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
      {isLoading ? <Preloader /> : null}
      {isNoResults ? <NoResults /> : null}
      {showSearchResults ? (
        <SearchResults
          isLoggedIn={isLoggedIn}
          resultsArray={resultsArray}
          savedArticles={savedArticles}
          lastSearchRequest={lastSearchRequest}
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
