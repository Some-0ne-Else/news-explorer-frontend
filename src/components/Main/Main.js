import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <section className="main">
      <Header isSavedNews={false} />
      <div className="main__wrapper">
        <h2 className="main__title">Что творится в мире?</h2>
        <p className="main__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </p>
        <SearchForm />
      </div>
      <SearchResults />
      <About />
      <Footer />
    </section>
  );
}

export default Main;
