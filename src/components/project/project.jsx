import React from 'react';

import './project.scss';

const Project = (props) => {

    // remove dashes and underscores and capitalize titles.
    const title = props.title.charAt(0).toUpperCase() + props.title.slice(1).replace(/-/g, " ").replace(/_/g, " ");    

    return (
        <div className="project">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
                <p>{props.description}</p>
            </a>
        </div>
    )
}

export default Project;
