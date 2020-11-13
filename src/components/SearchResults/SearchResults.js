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
}) {
  console.log('SearchResults', isLoggedIn);
  const [showLoadMore, setshowLoadMore] = React.useState(true);
  const cardsToRender = resultsArray.slice(0, currentIndex);

  React.useEffect(() => {
    if (resultsArray.length <= currentIndex) {
      setshowLoadMore(false);
    } else setshowLoadMore(true);
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
