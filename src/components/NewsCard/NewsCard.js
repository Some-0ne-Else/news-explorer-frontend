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
  handleArrayChange,
  savedArticles,
  lastSearchRequest,
}) {
  console.log('NewsCard', isLoggedIn);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [savedId, setSavedId] = React.useState('');

  React.useEffect(() => {
    if (isSearchCard) {
      let article;
      if (savedArticles.hasOwnProperty('data')) {
        article = savedArticles.data.find((article) => article.link === link);
      }
      if (article) {
        console.log(article._id);
        setIsBookmarked(true);
        setSavedId(article._id);
      }
    }
  }, [savedArticles, link, isSearchCard]);

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
    if (!isBookmarked) {
      api
        .postArticle(
          localStorage.getItem('jwt'),
          lastSearchRequest,
          title,
          text,
          date,
          source,
          link,
          image,
        )
        .then((res) => {
          console.log(res);
          if (res.data) {
            setIsBookmarked(true);
            setSavedId(res.data._id);
          }
        });
    } else {
      api.deleteArticle(localStorage.getItem('jwt'), savedId).then((res) => {
        console.log(savedId);
        setIsBookmarked(false);
      });
    }
  }

  function handleDeleteButton() {
    console.log(id);
    api.deleteArticle(localStorage.getItem('jwt'), id).then((res) => {
      console.log(res);
      if (res.ok) {
        handleArrayChange(id);
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
            className={
              isBookmarked
                ? 'news-card__bookmark-button news-card__bookmark-button_marked'
                : 'news-card__bookmark-button'
            }
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
