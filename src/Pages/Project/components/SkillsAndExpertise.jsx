import React from 'react'
import SkillCard from './SkillCard'
export default function SkillsAndExpertise() {
  return (
    <div>
        <h3>
            Skills And Expertise
        </h3>
        <div className="skillList">
            <SkillCard skill='HTML'/> 
            <SkillCard skill='CSS'/>
            <SkillCard skill='JavaScript'/>
            <SkillCard skill='React'/>
            <SkillCard skill='TailwindCSS'/>           
        </div>
    </div>
  )
}
