import React,{useEffect} from 'react';

function MenuNav({mxWidth,showHideMenu,setShowHideMenu}){
const maxWidth=window.matchMedia(mxWidth);
function toggleMenu(){
if(!maxWidth.mathes){
  if(showHideMenu===''||showHideMenu==='hideNavLi'){
setShowHideMenu('showNavLi')}else{setShowHideMenu('hideNavLi')}
}
};
useEffect(()=>{maxWidth.addEventListener('change',function(){
  setShowHideMenu('')
});
});
return <div id="menu" onClick={toggleMenu}>МЕНЮ</div>
};
export default MenuNav;
