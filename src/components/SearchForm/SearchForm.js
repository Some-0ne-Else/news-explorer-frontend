import React from 'react';
import './SearchForm.css';

function SearchForm({ handleSearch, isSearchButtonBlocked }) {
  const searchStringRef = React.useRef('');
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
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
        ref={inputRef}
      ></input>

      {isSearchButtonBlocked ? (
        <button className="search__button" type="submit" disabled>
          Идет поиск
        </button>
      ) : (
        <button className="search__button" type="submit">
          Искать
        </button>
      )}
    </form>
  );
}

export default SearchForm;
