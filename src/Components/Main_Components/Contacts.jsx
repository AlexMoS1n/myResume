import React from 'react';
import {Helmet} from "react-helmet";

function Contacts(){
  return (
    <>
    <Helmet>
    <title>Контакты</title>
    </Helmet>
    <header>
    <h1>Контакты</h1>
    </header>
    <img src="images/contact.jpg" id="contact" alt="Контакты"/>
    <div className="items">
    <div className="icons">
    <img src="images/icon-mail.png" alt="Е-мейл"/>
    E-mail: alex-m_777@mail.ru
    </div>
    <div className="icons">
    <img src="images/icon-phone.png" alt="Телефон"/>
    Тел: 8-977-423-71-83
    </div>
    <div className="icons">
    <img src="images/icon-map.png" alt="Адрес"/>
    Адрес: г. Москва
    </div>
    </div>
    <h2 id="metro"> Ближайшая станция метро </h2>
    <iframe title="My Map" id="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A7d8d4ba95067ffd0f958a81935f96f0cdfd640426c9989d167d1afd9f650f3b9&amp;source=constructor"  height="483" frameBorder="0"></iframe>

    </>
  )
};
export default Contacts;
