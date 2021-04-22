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
import noImage from '../../images/no-image.png';
import { cardsPerStep } from '../../utils/Constants';
import { CurrentUserContext } from '../../contexts/CurrentUser';

function Main({
  isMobileMenu,
  handleMobileMenuClick,
  loginButtonHandler,
  handleLogout,
  showSearchResults,
  setShowSearchResults,
  lastSearchRequest,
  setLastSearchRequest,
}) {
  const [resultsArray, setResultsArray] = React.useState([]);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(3);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNoResults, setIsNoResults] = React.useState(false);
  const [isSearchButtonBlocked, setisSearchButtonBlocked] = React.useState(
    false,
  );
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      if (localStorage.getItem('searchResult')) {
        setResultsArray(JSON.parse(localStorage.getItem('searchResult')));
        setShowSearchResults(true);
      }
    }
  }, [currentUser, setShowSearchResults]);

  React.useEffect(() => {
    setLastSearchRequest(localStorage.getItem('lastSearchRequest'));
    if (currentUser) {
      api.getArticles(localStorage.getItem('jwt')).then((res) => {
        setSavedArticles(res);
      });
    }
  }, [currentUser, setLastSearchRequest]);

  function fixAbsentData(searchArray) {
    searchArray.forEach((item) => {
      if (item.urlToImage === null) {
        item.urlToImage = noImage;
      }
    });
  }

  function handleSearch(searchRequest) {
    setisSearchButtonBlocked(true);
    setShowSearchResults(false);
    setIsNoResults(false);
    setIsLoading(true);
    setLastSearchRequest(searchRequest);
    newsApi
      .search(searchRequest)
      .then((res) => {
        if (res) {
          if (res.articles.length > 0 && res.status === 'ok') {
            fixAbsentData(res.articles);
            localStorage.setItem('searchResult', JSON.stringify(res.articles));
            localStorage.setItem('lastSearchRequest', searchRequest);
            setResultsArray(res.articles);
            setShowSearchResults(true);
          } else {
            setIsNoResults(true);
          }
        } else console.log('Ошибка при получении данных');
      })
      .finally(() => {
        setIsLoading(false);
        setisSearchButtonBlocked(false);
      });
  }

  function loadMore() {
    setCurrentIndex(currentIndex + cardsPerStep);
  }

  return (
    <section className="main">
      <Header
        isMobileMenu={isMobileMenu}
        handleMobileMenuClick={handleMobileMenuClick}
        loginButtonHandler={loginButtonHandler}
        handleLogout={handleLogout}
      />
      <div className="main__wrapper">
        <h2 className="main__title">Что творится в мире?</h2>
        <p className="main__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </p>
        <SearchForm
          handleSearch={handleSearch}
          isSearchButtonBlocked={isSearchButtonBlocked}
        />
      </div>
      {isLoading ? <Preloader /> : null}
      {isNoResults ? <NoResults /> : null}
      {showSearchResults ? (
        <SearchResults
          resultsArray={resultsArray}
          savedArticles={savedArticles}
          lastSearchRequest={lastSearchRequest}
          currentIndex={currentIndex}
          loadMoreHandler={loadMore}
          loginButtonHandler={loginButtonHandler}
        />
      ) : null}
      <About />
      <Footer />
    </section>
  );
}

export default Main;
