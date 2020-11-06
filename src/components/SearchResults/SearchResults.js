import React from 'react';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults() {
  const searchResultsArr = [
    {
      _id: '5f8f4348e547192874e08cf4',
      keyword: 'Природа',
      title: 'Национальное достояние – парки',
      text:
        'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ',
      date: '2 августа, 2019',
      source: 'Дзен',
      link: 'http://link.ru',
      image: 'http://ihaveerror.ru/img/card_1.jpg',
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
      image: 'http://ihaveerror.ru/img/card_2.jpg',
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
      image: 'http://ihaveerror.ru/img/card_3.jpg',
      __v: 0,
    },
  ];
  return (
    <section className="search-results">
      <h2 className="search-results__title">Результаты поиска</h2>
      <NewsCardList cards={searchResultsArr} isSearchCard={true} />
      <button className="search-results__load-more-button">Показать еще</button>
    </section>
  );
}

export default SearchResults;
