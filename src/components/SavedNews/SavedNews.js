import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import api from '../../utils/MainApi';

function SavedNews({
  isLoggedIn,
  isMobileMenu,
  handleMobileMenuClick,
  handleLogout,
}) {
  const [savedNewsArticles, setSavedNewsArticles] = React.useState([]);
  const [keyState, setKeyState] = React.useState('');
  const [statArray, setStatArray] = React.useState([]);

  React.useEffect(() => {
    setKeyState(
      statArray.map((item, index) => (
        <span key={index} className="saved-news-header__keywords-span">
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
      .catch((err) => console.log(err));
  }, []);

  function updateSavedCards() {
    api.getArticles(localStorage.getItem('jwt')).then((res) => {
      setSavedNewsArticles(res.data);
      setStatArray(countWords(res.data));
    });
  }

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
        isLoggedIn={isLoggedIn}
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
        isLoggedIn={isLoggedIn}
        updateSavedCards={updateSavedCards}
      />
      <Footer />
    </section>
  );
}

export default SavedNews;
