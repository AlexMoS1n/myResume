import React from 'react';
function JScript(){
  return (
  <div className="skillsmain">
    <h2>Примеры навыков в работе с JavaScript</h2>
    <h3>Игра крестики-нолики</h3>
    <iframe src="examples/tic-tac-toe.html" name="tic-tac-toe" title="крестики-нолики">
    Ваш браузер не поддерживает плавающие фреймы!
    </iframe>
    <h3>Анимация с помощью requestAnimationFrame</h3>
    <iframe src="examples/animation-js.html" name="animation-js" title="анимация на js">
    Ваш браузер не поддерживает плавающие фреймы!
    </iframe>
    <h3>Рисование с помощью canvas</h3>
    <iframe src="examples/canvas.html" name="canvas" title="canvas">
    Ваш браузер не поддерживает плавающие фреймы!
    </iframe>
    <h3>Использование drag-n-drop</h3>
    <iframe src="examples/drag-n-drop.html" name="drag-n-drop" title="drag-n-drop">
    Ваш браузер не поддерживает плавающие фреймы!
    </iframe>
    <h3>AJAX с помощью fetch</h3>
    <p>Данные запрашиваются с сервиса <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noreferrer">jsonplaceholder</a></p>
    <iframe src="examples/ajax.html" name="ajax" title="ajax">
    Ваш браузер не поддерживает плавающие фреймы!
    </iframe>
    <h3>Форма для создания резюме</h3>
    <iframe src="examples/resume-creating.html" name="resume-creating" title="resume-creating">
    Ваш браузер не поддерживает плавающие фреймы!
    </iframe>
  </div>)
}
export default JScript;
