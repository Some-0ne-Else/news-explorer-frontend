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
  const [savedNewsArticles, setSavedNewsArticles] = React.useState([]);
  const [statArray, setStatArray] = React.useState([
    { keyword: 'test', counter: 3 },
    { keyword: 'test', counter: 5 },
  ]);

  React.useEffect(() => {
    api.getArticles(localStorage.getItem('jwt')).then((res) => {
      setSavedNewsArticles(res.data);
      setStatArray(countWords(res.data));
    });
  }, []);

  React.useEffect(() => {
    ActivateSavedNews();
  }, [ActivateSavedNews]);

  function countWords(arr) {
    let resultArr = [];
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      let acc = 0;
      if (resultArr.find((el) => el.keyword === arr[i].keyword)) {
        continue;
      } // if keyword already checked, then skiping it
      for (let j = 0; j < arr.length; j++) {
        if (arr[i].keyword === arr[j].keyword) acc++;
        if (j === arr.length - 1) {
          index += 1;
        }
      }
      resultArr[index] = { keyword: arr[i].keyword, counter: acc };
    }
    resultArr.sort(function (a, b) {
      return b.counter - a.counter;
    });
    return resultArr;
  }

  return (
    <section className="saved-news">
      <Header
        isSavedNews={isSavedNews}
        isLoggedIn={isLoggedIn}
        isMobileMenu={isMobileMenu}
        handleMobileMenuClick={handleMobileMenuClick}
        handleLogout={handleLogout}
      />
      <SavedNewsHeader resultArray={savedNewsArticles} statArray={statArray} />
      <NewsCardList
        cards={savedNewsArticles}
        setSavedNewsArticles={setSavedNewsArticles}
        savedArticles={savedNewsArticles}
        isLoggedIn={isLoggedIn}
      />
      <Footer />
    </section>
  );
}

export default SavedNews;
