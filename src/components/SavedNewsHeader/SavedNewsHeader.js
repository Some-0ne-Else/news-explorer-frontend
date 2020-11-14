import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUser';
import './SavedNewsHeader.css';

/* assuming for now that keywordsArray comes already sorted */
function SavedNewsHeader({ keywordsArray }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__title">Сохранённые статьи</h2>
      <p className="saved-news-header__greeting">
        {currentUser}, у вас {keywordsArray.length} сохранённых статей
      </p>
      <p className="saved-news-header__keywords">
        По ключевым словам:{' '}
        <span className="saved-news-header__keywords-span">
          {}, {}
        </span>
        {}и
        <span className="saved-news-header__keywords-span">
          {keywordsArray.length - 2}-м другим
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
