import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards, isSearchCard, isLoggedIn }) {
  console.log('NewsCardList', isLoggedIn);
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
  if (isSearchCard) {
    return (
      <section className="news-card-list">
        {cards.map((card, index) => (
          <NewsCard
            isLoggedIn={isLoggedIn}
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
  return (
    <section className="news-card-list">
      {cards.map((card, index) => (
        <NewsCard
          isLoggedIn={isLoggedIn}
          keyword={card.keyword}
          title={card.title}
          text={card.text}
          date={changeDateFormat(card.date)}
          image={card.image}
          source={card.source}
          key={index}
          isSearchCard={isSearchCard}
        />
      ))}
    </section>
  );
}

export default NewsCardList;
