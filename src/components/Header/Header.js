import React from 'react';
import './Header.css';

function Header() {
  return (
    <section className="header">
      <div className="header__wrapper">
        <h1 className="header__title">NewsExplorer</h1>
        <ul className="header__menu">
          <li className="header__menu-item">Главная</li>
          <li className="header__menu-item">Авторизоваться</li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
