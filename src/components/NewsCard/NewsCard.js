import React from 'react';
import './NewsCard.css';

function NewsCard({ src }) {
  return (
    <div className="news-card">
      <div className="news-card__image-wrapper">
        <p className="news-card__keyword">Природа</p>
        <button className="news-card__delete-button"></button>
        <img className="news-card__image" src={src} alt="" />
      </div>
      <div className="news-card__description-wrapper">
        <p className="news-card__date">2 августа, 2019</p>
        <p className="news-card__title">Национальное достояние – парки</p>
        <p className="news-card__text">
          В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
          складываться система национальных парков – охраняемых территорий, где
          и сегодня каждый может приобщиться к природе.
        </p>
        <p className="news-card__source">Дзен</p>
      </div>
    </div>
  );
}

export default NewsCard;
