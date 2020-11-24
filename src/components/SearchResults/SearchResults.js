import React from 'react';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults({
  resultsArray,
  savedArticles,
  lastSearchRequest,
  currentIndex,
  loadMoreHandler,
  isLoggedIn,
  loginButtonHandler,
}) {
  const [showLoadMore, setshowLoadMore] = React.useState(true);
  const cardsToRender = resultsArray.slice(0, currentIndex);
  React.useEffect(() => {
    resultsArray.length <= currentIndex
      ? setshowLoadMore(false)
      : setshowLoadMore(true);
  }, [currentIndex, resultsArray.length]);

  return (
    <section className="search-results">
      <h2 className="search-results__title">Результаты поиска</h2>
      <NewsCardList
        cards={cardsToRender}
        savedArticles={savedArticles}
        lastSearchRequest={lastSearchRequest}
        isSearchCard={true}
        isLoggedIn={isLoggedIn}
        loginButtonHandler={loginButtonHandler}
      />
      {showLoadMore ? (
        <button
          type="button"
          onClick={loadMoreHandler}
          className="search-results__load-more-button"
        >
          Показать еще
        </button>
      ) : null}
    </section>
  );
}

export default SearchResults;
