import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebookLogo from '../../images/facebook_logo.svg';
import githubLogo from '../../images/github_logo.svg';

function Footer() {
  return (
    <section className="footer">
      <p className="footer__copyright">
        © 2020 Some0neElse, Powered by News API
      </p>
      <div className="footer__wrapper">
        <nav className="footer__nav">
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <Link to="/" className="footer__menu-link">
                Главная
              </Link>
            </li>
            <li className="footer__menu-item">
              <a
                href="https://praktikum.yandex.ru"
                className="footer__menu-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Яндекс.Практикум
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__social-media">
          <a
            className="footer__social-media-link"
            href="https://github.com/Some-0ne-Else"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="footer__link-image"
              alt="Github logo"
              src={githubLogo}
            />
          </a>
          <a
            className="footer__social-media-link"
            href="https://facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="footer__link-image"
              alt="Facebook logo"
              src={facebookLogo}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
