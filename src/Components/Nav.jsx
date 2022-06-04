import React,{useState} from 'react';
import LisNav from './Nav_Components/LisNav';
import MenuNav from './Nav_Components/MenuNav';
function Nav({page,setPage}){
  let lis=[
    {text: 'Общие сведения'},
    {text: 'Навыки'},
    {text: 'Дипломы'},
    {text: 'Контакты'}
  ];
let mxWidth='(max-width:860px)';
let [showHideMenu,setShowHideMenu]=useState('');



  return(
    <nav>
      <MenuNav
      mxWidth={mxWidth}
      showHideMenu={showHideMenu}
      setShowHideMenu={setShowHideMenu}
      />

      <LisNav
      lis={lis}
      page={page}
      setPage={setPage}
      showHideMenu={showHideMenu}
      />

    </nav>
  )
}
export default Nav
