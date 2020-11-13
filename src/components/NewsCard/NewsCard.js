import React from 'react';
import api from '../../utils/MainApi';

import './NewsCard.css';

function NewsCard({
  id,
  keyword,
  title,
  text,
  date,
  source,
  link,
  image,
  isSearchCard,
  isLoggedIn,
  deleteButtonHandler,
}) {
  console.log('NewsCard', isLoggedIn);

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

  function handleBookmarkButton() {
    api.postArticle(
      localStorage.getItem('jwt'),
      'keyword-test',
      title,
      text,
      date,
      source,
      link,
      image,
    );
  }

  function handleDeleteButton() {
    console.log('click');
    console.log(id);
    api.deleteArticle(localStorage.getItem('jwt'), id).then((res) => {
      console.log(res);
      if (res.ok) {
        deleteButtonHandler(id);
      }
    });
  }

  if (isSearchCard) {
    return (
      <div className="news-card">
        <div className="news-card__image-wrapper">
          <button
            type="button"
            onClick={handleBookmarkButton}
            className="news-card__bookmark-button"
          ></button>
          <img className="news-card__image" src={image} alt={title} />
        </div>
        <div className="news-card__description-wrapper">
          <p className="news-card__date">{changeDateFormat(date)}</p>
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
        <button
          type="button"
          onClick={handleDeleteButton}
          className="news-card__delete-button"
        ></button>
        <img className="news-card__image" src={image} alt={title} />
      </div>
      <div className="news-card__description-wrapper">
        <p className="news-card__date">{changeDateFormat(date)}</p>
        <p className="news-card__title">{title}</p>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </div>
  );
}

export default NewsCard;
