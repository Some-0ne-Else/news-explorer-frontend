import React from 'react';
import './SearchForm.css';

function SearchForm({ handleSearch }) {
  const searchStringRef = React.useRef('');

  function handleChange(e) {
    searchStringRef.current = e.target.value;
  }
  function search(e) {
    e.preventDefault();
    handleSearch(searchStringRef.current);
  }
  return (
    <form className="search__form" onSubmit={search}>
      <input
        className="search__input"
        placeholder="Введите тему новости"
        required
        onChange={handleChange}
      ></input>
      <button className="search__button" type="submit">
        Искать
      </button>
    </form>
  );
}

export default SearchForm;
