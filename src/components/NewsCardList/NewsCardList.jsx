/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  cards,
  savedArticles,
  lastSearchRequest,
  updateSavedCards,
  loginButtonHandler,
}) {
  const location = useLocation();
  if (location.pathname === '/') {
    return (
      <section className="news-card-list">
        {cards.map((card, index) => (
          <NewsCard
            keyword={card.keyword}
            title={card.title}
            text={card.description}
            date={card.publishedAt}
            image={card.urlToImage}
            source={card.source.name}
            link={card.url}
            key={index.toString()}
            savedArticles={savedArticles}
            lastSearchRequest={lastSearchRequest}
            loginButtonHandler={loginButtonHandler}
          />
        ))}
      </section>
    );
  }
  return (
    <section className="news-card-list">
      {cards.map((card) => (
        <NewsCard
          keyword={card.keyword}
          title={card.title}
          text={card.text}
          date={card.date}
          image={card.image}
          link={card.link}
          source={card.source}
          key={card._id}
          id={card._id}
          updateSavedCards={updateSavedCards}
        />
      ))}
    </section>
  );
}

export default NewsCardList;

NewsCardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  savedArticles: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  lastSearchRequest: PropTypes.string.isRequired,
  updateSavedCards: PropTypes.func.isRequired,
  loginButtonHandler: PropTypes.func.isRequired,

};
