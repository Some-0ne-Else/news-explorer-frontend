import React from 'react';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults({ resultsArray, currentIndex, loadMoreHandler }) {
  const [showLoadMore, setshowLoadMore] = React.useState(true);
  const cardsToRender = resultsArray.slice(0, currentIndex);

  React.useEffect(() => {
    if (resultsArray.length <= currentIndex) {
      console.log('finish');
      setshowLoadMore(false);
    }
  }, [currentIndex]);

  return (
    <section className="search-results">
      <h2 className="search-results__title">Результаты поиска</h2>
      <NewsCardList cards={cardsToRender} isSearchCard={true} />
      {(
        <button
          type="button"
          onClick={loadMoreHandler}
          className="search-results__load-more-button"
        >
          Показать еще
        </button>
      ) && showLoadMore}
    </section>
  );
}

export default SearchResults;
