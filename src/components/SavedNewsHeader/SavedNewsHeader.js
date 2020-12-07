import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUser';
import './SavedNewsHeader.css';

function SavedNewsHeader({ resultArray, statArray, keyState }) {
  const currentUser = React.useContext(CurrentUserContext);

  function declOfNum(n, textForms) {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
      return textForms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return textForms[1];
    }
    if (n1 === 1) {
      return textForms[0];
    }
    return textForms[2];
  }
  const textForms = [
    'сохраненная статья',
    'сохраненные статьи',
    'сохраненных статей',
  ];
  const declArticles = declOfNum(resultArray.length, textForms);

  if (statArray.length <= 3 && resultArray.length !== 0) {
    return (
      <section className="saved-news-header">
        <h2 className="saved-news-header__title">Сохранённые статьи</h2>
        <p className="saved-news-header__greeting">
          {currentUser}, у вас {resultArray.length} {declArticles}
        </p>
        <p className="saved-news-header__keywords">
          По ключевым словам:&nbsp;
          {keyState}
        </p>
      </section>
    );
  }
  if (resultArray.length === 0) {
    return (
      <section className="saved-news-header">
        <h2 className="saved-news-header__title">Сохранённые статьи</h2>
        <p className="saved-news-header__greeting">
          {currentUser}, у вас нет {declArticles}
        </p>
      </section>
    );
  }
  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__title">Сохранённые статьи</h2>
      <p className="saved-news-header__greeting">
        {currentUser}, у вас {resultArray.length} {declArticles}
      </p>
      <p className="saved-news-header__keywords">
        По ключевым словам:{' '}
        <span className="saved-news-header__keywords-span">
          {statArray[0].keyword}, {statArray[1].keyword}
        </span>
        &nbsp;и&nbsp;
        <span className="saved-news-header__keywords-span">
          {statArray.length - 2}-м другим
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
