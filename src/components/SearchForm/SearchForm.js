import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search__form">
      <input
        className="search__input"
        placeholder="Введите тему новости"
        required
      ></input>
      <button className="search__button" type="submit">
        <p className="search__button-text">Искать</p>
      </button>
    </form>
  );
}

export default SearchForm;
