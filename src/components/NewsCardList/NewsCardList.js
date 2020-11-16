import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards, isSearchCard }) {
  return (
    <section className="news-card-list">
      {cards.map((card) => (
        <NewsCard
          keyword={card.keyword}
          title={card.title}
          text={card.text}
          date={card.date}
          image={card.image}
          source={card.source}
          key={card._id}
          isSearchCard={isSearchCard}
        />
      ))}
    </section>
  );
}

export default NewsCardList;
