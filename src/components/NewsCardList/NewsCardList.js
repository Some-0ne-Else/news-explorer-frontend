import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  cards,
  savedArticles,
  lastSearchRequest,
  isSearchCard,
  isLoggedIn,
  statArray,
  updateSavedCards,
}) {
  if (isSearchCard) {
    return (
      <section className="news-card-list">
        {cards.map((card, index) => (
          <NewsCard
            isLoggedIn={isLoggedIn}
            keyword={card.keyword}
            title={card.title}
            text={card.description}
            date={card.publishedAt}
            image={card.urlToImage}
            source={card.source.name}
            link={card.url}
            key={index}
            savedArticles={savedArticles}
            lastSearchRequest={lastSearchRequest}
            isSearchCard={isSearchCard}
          />
        ))}
      </section>
    );
  }
  return (
    <section className="news-card-list">
      {cards.map((card) => (
        <NewsCard
          isLoggedIn={isLoggedIn}
          keyword={card.keyword}
          title={card.title}
          text={card.text}
          date={card.date}
          image={card.image}
          link={card.link}
          source={card.source}
          key={card._id}
          id={card._id}
          isSearchCard={isSearchCard}
          updateSavedCards={updateSavedCards}
        />
      ))}
    </section>
  );
}

export default NewsCardList;
