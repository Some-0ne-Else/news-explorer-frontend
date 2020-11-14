import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUser';
import './SavedNewsHeader.css';

function SavedNewsHeader({ resultArray, statArray }) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__title">Сохранённые статьи</h2>
      <p className="saved-news-header__greeting">
        {currentUser}, у вас {resultArray.length} сохранённых статей
      </p>
      <p className="saved-news-header__keywords">
        По ключевым словам:{' '}
        <span className="saved-news-header__keywords-span">
          {statArray[0].keyword}, {statArray[1].keyword}
        </span>
        &nbsp;и&nbsp;
        <span className="saved-news-header__keywords-span">
          {resultArray.length - 2}-м другим
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
