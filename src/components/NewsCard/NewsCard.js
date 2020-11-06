import React from 'react';
import './NewsCard.css';

function NewsCard({ keyword, title, text, date, source, image, isSearchCard }) {
  if (isSearchCard) {
    return (
      <div className="news-card">
        <div className="news-card__image-wrapper">
          <button className="news-card__bookmark-button"></button>
          <img className="news-card__image" src={image} alt="" />
        </div>
        <div className="news-card__description-wrapper">
          <p className="news-card__date">{date}</p>
          <p className="news-card__title">{title}</p>
          <p className="news-card__text">{text}</p>
          <p className="news-card__source">{source}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="news-card">
      <div className="news-card__image-wrapper">
        <p className="news-card__keyword">{keyword}</p>
        <button className="news-card__delete-button"></button>
        <img className="news-card__image" src={image} alt="" />
      </div>
      <div className="news-card__description-wrapper">
        <p className="news-card__date">{date}</p>
        <p className="news-card__title">{title}</p>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </div>
  );
}

export default NewsCard;
