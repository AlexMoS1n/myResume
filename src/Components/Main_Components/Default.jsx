import React from 'react';
import {Helmet} from "react-helmet";

function Default(){
  return (
    <>
    <Helmet>
    <title>Резюме Мосина А.С.</title>
    </Helmet>
    <header>
    <h1>Резюме Мосина А.С.</h1>
    </header>
    <div id="resume-photo">
    <img src="images/resume.png" alt="Резюме"/>
    </div>
    <hgroup>
    <h2><span>Желаемая должность:</span> программист-стажер(веб-разработчик, junior)</h2>
    <h2><span>Рабочий график:</span> свободный, гибкий</h2>
    <h2><span>Количество рабочих часов в неделю:</span> при полной занятости в неделю (вкл. сб. и вс.) — 40 и более </h2>
    <h2><span>Желаемая заработная плата:</span> по договоренности</h2>
    </hgroup>
    </>
  )
};
export default Default;
