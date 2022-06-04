import React from 'react';
function SkillsNav({skills,setSkills}){
const maxWidth=window.matchMedia('(max-width:859px)');
let result=skills.map(function(elem,index){
  return <div key={index} className='skills' style={elem.style} onClick={()=> funcAnimation(index)}>{elem.text}</div>
});


function funcAnimation(index){
    let start = performance.now();
    let duration;
    if(maxWidth.matches){duration=1}else{duration=500}
      requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let arr=skills.map(function(elem,numberElem){
          if(index===numberElem && !elem.activeSkill ){

            let leftStart=parseInt(elem.style.left);

            let leftNew;
            if(leftStart!==0){leftNew=(85-timeFraction*42.5) +'%'}
          else{leftNew=timeFraction*42.5 +'%'};
          let topNew=timeFraction*8.5 +'em'
          if(timeFraction===1){return {text:elem.text, activeSkill:true, style:{left:leftNew,top:topNew,backgroundColor:'red'}}}
          else{return {text:elem.text, activeSkill:false, style:{left:leftNew,top:topNew}}}
          }else if(index!==numberElem && elem.activeSkill){
            let leftEnd=parseInt(skills[index].style.left);
            let leftOld;
            if(leftEnd!==0){leftOld=(42.5+timeFraction*42.5)+'%'}
            else{leftOld=(42.5-timeFraction*42.5)+'%'}
            let topOld=(85-timeFraction*85)+'%';
            if(timeFraction===1){return {text:elem.text, activeSkill:false, style:{left:leftOld,top:topOld}}}
        else {return {text:elem.text, activeSkill:true, style:{left:leftOld,top:topOld}}}
      }
      else {return elem}
    });
    setSkills(arr);
    if (timeFraction < 1) {
  requestAnimationFrame(animate);
}
    })

}




  return (
    <div id="divSkills">
    {result}
    </div>
  )
};
export default SkillsNav;
