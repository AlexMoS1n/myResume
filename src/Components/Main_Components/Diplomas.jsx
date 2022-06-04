import React, {useState} from 'react';
import {Helmet} from "react-helmet";
let arr_img=[
  {name:'images/dipl/dipl1.jpg', alt:'Диплом', size:'one'},
  {name:'images/dipl/dipl2.jpg', alt:'Диплом Магистра', size:'one'},
  {name:'images/dipl/dipl3.jpg', alt:'Диплом Бакалавра', size:'one'},
  {name:'images/dipl/assessments1.jpg', alt:'Оценки', size:'one'},
  {name:'images/dipl/assessments2.jpg', alt:'Оценки', size:'one'}
]


function Diplomas(){
  let [imgs,setImgs]=useState(arr_img);
  let result=imgs.map(function(elem,index){
    if(elem.size==='one'){return <div className="img_dipl" key={index}> <img src={elem.name} alt={elem.alt} key={index} onClick={()=>maxSize(index)}/></div>}
    else if(elem.size){return <div className="img_dipl" key={index}><img src={elem.name} alt={elem.alt} key={index} className="maxSize" onClick={()=>maxSize(index)}/></div>}
    else{return <div className="img_dipl" key={index}><img src={elem.name} alt={elem.alt} key={index} className="normSize" onClick={()=>maxSize(index)}/></div>}
  }

  )
  function maxSize(index){
  setImgs(imgs.map(function(elem,number){
    if(index===number){ if(elem.size==='one'){return {name:elem.name, alt:elem.alt, size:true}}
      else{return {name:elem.name, alt:elem.alt, size:!elem.size}}
    }else {
    return elem;
  }

}))
  }


  return (
    <>
    <Helmet>
    <title>Дипломы</title>
    </Helmet>
    <header>
      <h1>Дипломы</h1>
    </header>
    <div id="dipl">
      {result}
    </div>
    </>
  )
};
export default Diplomas;
