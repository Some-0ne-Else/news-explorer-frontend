import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults({
  resultsArray,
  savedArticles,
  lastSearchRequest,
  currentIndex,
  loadMoreHandler,
  loginButtonHandler,
}) {
  const [showLoadMore, setshowLoadMore] = React.useState(true);
  const cardsToRender = resultsArray.slice(0, currentIndex);
  React.useEffect(() => (resultsArray.length <= currentIndex
    ? setshowLoadMore(false)
    : setshowLoadMore(true)), [currentIndex, resultsArray.length]);

  return (
    <section className="search-results">
      <h2 className="search-results__title">Результаты поиска</h2>
      <NewsCardList
        cards={cardsToRender}
        savedArticles={savedArticles}
        lastSearchRequest={lastSearchRequest}
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

SearchResults.propTypes = {
  resultsArray: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  savedArticles: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  lastSearchRequest: PropTypes.string,
  currentIndex: PropTypes.number.isRequired,
  loadMoreHandler: PropTypes.func.isRequired,
  loginButtonHandler: PropTypes.func.isRequired,
};
SearchResults.defaultProps = {
  lastSearchRequest: '',
};
