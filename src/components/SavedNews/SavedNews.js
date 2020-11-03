import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import NewsCard from '../NewsCard/NewsCard';
import nationalImg from '../../images/card_national.jpg';

function SavedNews() {
  const keywordsArray = ['Природа', 'Тайга', 'еще один', 'еще один'];
  return (
    <section className="saved-news">
      <Header isSavedNews={true} />
      <SavedNewsHeader userName="Грета" keywordsArray={keywordsArray} />
      <NewsCard src={nationalImg} />
      <Footer />
    </section>
  );
}

export default SavedNews;
