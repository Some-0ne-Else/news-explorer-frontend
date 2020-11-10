import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';

function SavedNews({
  ActivateSavedNews,
  isSavedNews,
  isLoggedIn,
  userName,
  isMobileMenu,
  handleMobileMenuClick,
  handleLogout,
}) {
  const keywordsArray = ['Природа', 'Тайга', 'еще один', 'еще один'];
  const cards = [
    {
      _id: '5f8f4348e547192874e08cf4',
      keyword: 'Природа',
      title: 'Национальное достояние – парки',
      text:
        'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ',
      date: '2 августа, 2019',
      source: 'Дзен',
      link: 'http://link.ru',
      image: 'https://some0neelse.tk/static/media/card_1.jpg',
      __v: 0,
    },
    {
      _id: '5f8f62988cb60c0c6cf61f3f',
      keyword: 'Природа',
      title: 'Лесные огоньки: история одной фотографии',
      text:
        'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
      date: '2 августа, 2019',
      source: 'Афиша',
      link: 'http://link.ru',
      image: 'https://some0neelse.tk/static/media/card_2.jpg',
      __v: 0,
    },
    {
      _id: '5f8f62988cb60c0c6cf61m2f',
      keyword: 'Тайга',
      title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка',
      text:
        'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...',
      date: '2 августа, 2019',
      source: 'Медиазона',
      link: 'http://link.ru',
      image: 'https://some0neelse.tk/static/media/card_3.jpg',
      __v: 0,
    },
    {
      _id: '5f8f4348e547192874e08cf8',
      keyword: 'Природа',
      title: 'Национальное достояние – парки',
      text:
        'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ',
      date: '2 августа, 2019',
      source: 'Дзен',
      link: 'http://link.ru',
      image: 'https://some0neelse.tk/static/media/card_1.jpg',
      __v: 0,
    },
    {
      _id: '5f8f62988cb60c0c6cf61f30',
      keyword: 'Природа',
      title: 'Лесные огоньки: история одной фотографии',
      text:
        'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
      date: '2 августа, 2019',
      source: 'Афиша',
      link: 'http://link.ru',
      image: 'https://some0neelse.tk/static/media/card_2.jpg',
      __v: 0,
    },
  ];
  React.useEffect(() => {
    ActivateSavedNews();
  }, [ActivateSavedNews]);

  return (
    <section className="saved-news">
      <Header
        isSavedNews={isSavedNews}
        isLoggedIn={isLoggedIn}
        userName={userName}
        isMobileMenu={isMobileMenu}
        handleMobileMenuClick={handleMobileMenuClick}
        handleLogout={handleLogout}
      />
      <SavedNewsHeader userName={userName} keywordsArray={keywordsArray} />
      <NewsCardList cards={cards} />
      <Footer />
    </section>
  );
}

export default SavedNews;
