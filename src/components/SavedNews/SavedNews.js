import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import api from '../../utils/MainApi';

function SavedNews({
  ActivateSavedNews,
  isSavedNews,
  isLoggedIn,
  isMobileMenu,
  handleMobileMenuClick,
  handleLogout,
}) {
  const [resultArray, setResultArray] = React.useState([]);
  console.log('here', resultArray);
  React.useEffect(() => {
    api.getArticles(localStorage.getItem('jwt')).then((res) => {
      setResultArray(res.data);
    });
  }, []);
  const somevar = 'for test commit';
  React.useEffect(() => {
    ActivateSavedNews();
  }, [ActivateSavedNews]);

  return (
    <section className="saved-news">
      <Header
        isSavedNews={isSavedNews}
        isLoggedIn={isLoggedIn}
        isMobileMenu={isMobileMenu}
        handleMobileMenuClick={handleMobileMenuClick}
        handleLogout={handleLogout}
      />
      <SavedNewsHeader keywordsArray={resultArray} />
      <NewsCardList
        cards={resultArray}
        setResultArray={setResultArray}
        savedArticles={resultArray}
        isLoggedIn={isLoggedIn}
      />
      <Footer />
    </section>
  );
}

export default SavedNews;
