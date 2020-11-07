import React from 'react';
import './NoResults.css';
import notFoundImage from '../../images/not-found.svg';

function NoResults() {
  return (
    <section className="no-results">
      <img
        className="no-results__image"
        src={notFoundImage}
        alt="Ничего не найдено"
      />
      <h2 className="no-results__title">Ничего не найдено</h2>
      <p className="no-results__text">
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </section>
  );
}
export default NoResults;
