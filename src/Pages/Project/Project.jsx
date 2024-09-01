import React from 'react'
import ProjectTitle from './components/ProjectTitle'
import Description from './components/Description'
import AmtAndTime from './components/AmtAndTime'
import ProjectType from './components/ProjectType'
import SkillsAndExpertise from './components/SkillsAndExpertise'
import Activity from './components/Activity'
import './Project.css' 
function Project() {
    return (
        <>
            <ProjectTitle />
            <br />
            <hr />
            <Description />
            <br />
            <hr />
            <AmtAndTime />
            <br />
            <hr />
            <ProjectType />
            <br />
            <hr />
            <SkillsAndExpertise />
            <br />
            <hr />
            <Activity proposals='20 to 50' lastViewed='3hours ago' interviewing='1' invite='4' unanswered='0'/>
            <br />
            <hr />
        </>
    )
}

export default Project
