import React from 'react';
import PropTypes from 'prop-types';
import './SavedNewsHeader.css';
import CurrentUserContext from '../../contexts/CurrentUser';
import { declOfNum } from '../../utils/Utils';
import { textForms } from '../../utils/Constants';

function SavedNewsHeader({ resultArray, statArray, keyState }) {
  const currentUser = React.useContext(CurrentUserContext);

  const declArticles = declOfNum(resultArray.length, textForms);

  if (statArray.length <= 3 && resultArray.length !== 0) {
    return (
      <section className="saved-news-header">
        <h2 className="saved-news-header__title">Сохранённые статьи</h2>
        <p className="saved-news-header__greeting">
          {currentUser}
          , у вас
          {resultArray.length}
          {' '}
          {declArticles}
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
          {currentUser}
          , у вас нет
          {declArticles}
        </p>
      </section>
    );
  }
  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__title">Сохранённые статьи</h2>
      <p className="saved-news-header__greeting">
        {currentUser}
        , у вас
        {resultArray.length}
        {' '}
        {declArticles}
      </p>
      <p className="saved-news-header__keywords">
        По ключевым словам:
        {' '}
        <span className="saved-news-header__keywords-span">
          {statArray[0].keyword}
          ,
          {statArray[1].keyword}
        </span>
        &nbsp;и&nbsp;
        <span className="saved-news-header__keywords-span">
          {statArray.length - 2}
          -м другим
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;

SavedNewsHeader.propTypes = {
  resultArray: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  statArray: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  keyState: PropTypes.string.isRequired,
};
