import React from 'react';

import './project.scss'

const Project = (props) => {
    return (
    <div className="project">
        < a href={props.url}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </a>
    </div>
    )
}

export default Project;