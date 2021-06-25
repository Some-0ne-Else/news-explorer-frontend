import React from 'react';
import PropTypes from 'prop-types';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import api from '../../utils/MainApi';
import { countWords } from '../../utils/Utils';

function SavedNews({ isMobileMenu, handleMobileMenuClick, handleLogout }) {
  const [savedNewsArticles, setSavedNewsArticles] = React.useState([]);
  const [keyState, setKeyState] = React.useState('');
  const [statArray, setStatArray] = React.useState([]);

  React.useEffect(() => {
    setKeyState(
      statArray.map((item, index) => (
        <span key={index.toString()} className="saved-news-header__keywords-span">
          {' '}
          {item.keyword}
        </span>
      )),
    );
  }, [statArray]);

  React.useEffect(() => {
    api
      .getArticles(localStorage.getItem('jwt'))
      .then((res) => {
        setSavedNewsArticles(res.data);
        setStatArray(countWords(res.data));
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);

  function updateSavedCards() {
    api.getArticles(localStorage.getItem('jwt')).then((res) => {
      setSavedNewsArticles(res.data);
      setStatArray(countWords(res.data));
    });
  }

  return (
    <section className="saved-news">
      <Header
        isMobileMenu={isMobileMenu}
        handleMobileMenuClick={handleMobileMenuClick}
        handleLogout={handleLogout}
      />
      <SavedNewsHeader
        resultArray={savedNewsArticles}
        statArray={statArray}
        keyState={keyState}
      />
      <NewsCardList
        cards={savedNewsArticles}
        setSavedNewsArticles={setSavedNewsArticles}
        setStatArray={setStatArray}
        statArray={statArray}
        savedArticles={savedNewsArticles}
        updateSavedCards={updateSavedCards}
      />
      <Footer />
    </section>
  );
}

export default SavedNews;

SavedNews.propTypes = {
  isMobileMenu: PropTypes.bool.isRequired,
  handleMobileMenuClick: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
