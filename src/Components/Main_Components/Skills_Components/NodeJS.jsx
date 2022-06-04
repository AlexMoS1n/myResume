import React from 'react';
const pStyle = {
  textAlign:'center',
};
function NodeJS(){
  return (
  <div className="skillsmain">
    <h2>Примеры навыков работы с React</h2>
      <p style={pStyle}>Данный сайт построен на React. Также для управления тайтлами страниц используется сторонний компонент Helmet.</p>
      <p style={pStyle}>Страница будет обновляться, для показа работы со сторонними компонентами React</p>
      <br />
      <br />
      <h2>Примеры навыков работы с Node.js</h2>
        <p style={pStyle}>Идет разработка интернет-магазина на Node.js. Как только проект будет закончен, здесь появится ссылка на GitHub</p>
  </div>)
}
export default NodeJS;
