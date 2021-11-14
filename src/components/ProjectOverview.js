import React from 'react'
import CaseStudy from './CaseStudy';

function ProjectOverview(props) {
    return(
        <div style={{
            background:'#282828'
        }}>
            <h1>{props.cases.projecttitle}</h1>
        </div>
    )
}

export default ProjectOverview;