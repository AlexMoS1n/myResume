import React from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";
export default function Maket() {
  const activeLink=({isActive})=>isActive? 'activeLinkMaket':'';
  return (
    <div id="divWrapperMaket">
      <div id="divHeaderMaket">
      <Link to="/">Баннер</Link>
      </div>
      <div id="divMainMaket">
      <nav>
        <NavLink to="/general" className={activeLink}>Общие Сведения</NavLink>
        <NavLink to="/skills" className={activeLink}>Навыки</NavLink>
        <NavLink to="/diplomas" className={activeLink}>Дипломы</NavLink>
        <NavLink to="/contacts" className={activeLink}>Контакты</NavLink>
      </nav>
        <div id="divContentMaket">
        <Outlet />
        </div>
      </div>
      <div id="divFooterMaket">Футер</div>
    </div>
  );
}
