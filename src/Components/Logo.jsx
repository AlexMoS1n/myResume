import React from 'react';
function Logo({setPage}){
  return (
<div id="logo" onClick={()=>setPage(null)}>
<img src="images/logo.png" alt="Резюме Мосин А.С."/>
</div>
  )
};
export default Logo;
