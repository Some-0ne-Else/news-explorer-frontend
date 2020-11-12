import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards, isSearchCard }) {
  function changeDateFormat(dateString) {
    const date = new Date(dateString);
    const monthNames = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];
    const year = date.getFullYear();
    return `${day} ${monthName} ${year}`;
  }

  return (
    <section className="news-card-list">
      {cards.map((card, index) => (
        <NewsCard
          keyword={card.keyword}
          title={card.title}
          text={card.description}
          date={changeDateFormat(card.publishedAt)}
          image={card.urlToImage}
          source={card.source.name}
          key={index}
          isSearchCard={isSearchCard}
        />
      ))}
    </section>
  );
}

export default NewsCardList;
