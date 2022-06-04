import React from 'react';
function HTMLCSS(){
return (
<div className="skillsmain">
  <h2>Примеры навыков в работе с HTML & CSS</h2>
    <h3>Разметка страницы с ипользованием float </h3>
    <iframe src="examples/float.html" name="float" title="float">
    Ваш браузер не поддерживает плавающие фреймы!
    </iframe>
    <h3>Разметка страницы с ипользованием позиционирования</h3>
    <iframe src="examples/position.html" name="position" title="position">
    Ваш браузер не поддерживает плавающие фреймы!
    </iframe>
    <h3>Разметка страницы с ипользованием флексов</h3>
    <iframe src="examples/flex.html" name="flex" title="flex">
    Ваш браузер не поддерживает плавающие фреймы!
    </iframe>
    <h3>Анимация</h3>
    <iframe src="examples/animation.html" name="animation" title="animation">
    Ваш браузер не поддерживает плавающие фреймы!
    </iframe>
</div>)
}
export default HTMLCSS;
