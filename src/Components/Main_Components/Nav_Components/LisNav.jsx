import React from 'react';
function LisNav({lis,page,setPage,showHideMenu}){
let arr_li=lis.map((elem,index)=>{
    if(page===index){
       return (<li key={index} className='active'  onClick={()=>setPage(index)}>{elem.text}</li>)
    }
    else {
     return <li key={index}  onClick={()=>setPage(index)}>{elem.text}</li>;}
   });

return  (<ul className={showHideMenu}> {arr_li} </ul>);

};
export default LisNav;
