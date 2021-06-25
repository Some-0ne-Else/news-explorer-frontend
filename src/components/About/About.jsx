import React from 'react';
import './About.css';
import authorPhoto from '../../images/author_photo.jpg';

function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <img
          className="about__photo"
          alt="Фотография автора"
          src={authorPhoto}
        />
        <div className="about__info">
          <h2 className="about__title">Об авторе</h2>
          <p className="about__text">
            Это блок с описанием автора проекта. Здесь следует указать, как вас
            зовут, чем вы занимаетесь, какими технологиями разработки владеете.
          </p>
          <p className="about__text">
            Также можно рассказать о процессе обучения в Практикуме, чему вы тут
            научились, и чем можете помочь потенциальным заказчикам.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
