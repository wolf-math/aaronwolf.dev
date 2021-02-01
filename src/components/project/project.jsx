import React from 'react';

import './project.scss';

const Project = (props) => {

    // remove dashes and underscores and capitalize titles.
    const title = props.title.charAt(0).toUpperCase() + props.title.slice(1).replace(/-/g, " ").replace(/_/g, " ");

    // truncate description. 
    const description = (props.description === null ? " " : (        
        props.description.length > 80 ? 
        props.description.slice(0, 80) + "..." : 
        props.description))

    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <div className="project">
                <div className="title">
                    <h3>{title}</h3>
                </div>
                    <p>{description}</p>
                    <p>Written in {props.language}</p>
            </div>
        </a>
    )
}

export default Project;
