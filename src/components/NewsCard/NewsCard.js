import React from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../utils/MainApi';
import './NewsCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUser';

function NewsCard({
  id,
  keyword,
  title,
  text,
  date,
  source,
  link,
  image,
  updateSavedCards,
  savedArticles,
  lastSearchRequest,
  loginButtonHandler,
}) {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [savedId, setSavedId] = React.useState('');
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();

  React.useEffect(() => {
    // Marking searchCard with bookmars if we already saved thems
    if (location.pathname === '/' && currentUser) {
      let article;
      if (savedArticles.hasOwnProperty('data')) {
        article = savedArticles.data.find((article) => article.link === link);
      }
      if (article) {
        setIsBookmarked(true);
        setSavedId(article._id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedArticles, link]);

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
          if (res.data) {
            setIsBookmarked(true);
            setSavedId(res.data._id);
          }
        })
        .catch((err) => console.log(err));
    } else {
      api
        .deleteArticle(localStorage.getItem('jwt'), savedId)
        .then((res) => {
          setIsBookmarked(false);
        })
        .catch((err) => console.log(err));
    }
  }

  function handleDeleteButton() {
    api
      .deleteArticle(localStorage.getItem('jwt'), id)
      .then((res) => {
        if (res.ok) {
          updateSavedCards();
        }
      })
      .catch((err) => console.log(err));
  }

  function handleHover() {
    setIsHovered(!isHovered);
  }

  function handlePreDelete() {
    setIsClicked(!isClicked);
  }

  if (location.pathname === '/' && currentUser) {
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
          <a className="news-card__link" href={link} target="__blank">
            <img className="news-card__image" src={image} alt={title} />
          </a>
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

  if (location.pathname === '/') {
    return (
      <div className="news-card">
        <div className="news-card__image-wrapper">
          <button
            className={
              isHovered
                ? 'news-card__register-button news-card__register-button_active'
                : 'news-card__register-button'
            }
          >
            Войдите, чтобы сохранять статьи
          </button>
          <button
            type="button"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={loginButtonHandler}
            className={
              isBookmarked
                ? 'news-card__bookmark-button news-card__bookmark-button_marked'
                : 'news-card__bookmark-button'
            }
          ></button>
          <a className="news-card__link" href={link} target="__blank">
            <img className="news-card__image" src={image} alt={title} />
          </a>
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
          className={
            isClicked
              ? 'news-card__hover-button news-card__hover-button_active'
              : 'news-card__hover-button'
          }
        >
          Убрать из сохранённых
        </button>
        <button
          type="button"
          onClick={handlePreDelete}
          className="news-card__delete-button"
        ></button>
        <a className="news-card__link" href={link} target="__blank">
          <img className="news-card__image" src={image} alt={title} />
        </a>
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
