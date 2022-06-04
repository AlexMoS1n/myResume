import React,{useState} from 'react';
import {Helmet} from "react-helmet";
import SkillsNav from "./Skills_Components/SkillsNav";
import HTMLCSS from "./Skills_Components/HTMLCSS"
import JScript from "./Skills_Components/JScript"
import NodeJS from "./Skills_Components/NodeJS"

function Skills(){
  let [skills,setSkills]=useState([
    {text: "JavaScript",activeSkill:false, style:{left:'0',top:'0'}},
    {text: "React/Node.js",activeSkill:false, style:{left:'85%',top:'0'}},
    {text: "HTML/CSS",activeSkill:true, style:{left:'42.5%',top:'8.5em',backgroundColor:'red'}},
  ]);
  let result=[
    <JScript />,
    <NodeJS />,
    <HTMLCSS />,
  ];
  let k;
for(let j=0;j<skills.length;j++){
  if(skills[j].activeSkill){k=j}
};
  return (
    <>
    <Helmet>
    <title>Навыки</title>
    </Helmet>
    <header>
      <h1>Навыки</h1>
    </header>
    <SkillsNav

      skills={skills}
      setSkills={setSkills}
    />
    {result[k]}
    </>
  )
};
export default Skills;
