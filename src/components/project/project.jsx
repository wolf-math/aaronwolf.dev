import React from 'react';
import Roll from 'react-reveal/Roll';

import './project.scss';
import Card from 'react-bootstrap/Card';

const Project = (props) => {

    // remove dashes and underscores and capitalize titles.
    const title = props.title.charAt(0).toUpperCase() + props.title.slice(1).replace(/-/g, " ").replace(/_/g, " ");

    // truncate description. 
    const description = (props.description === null ? " " : (        
        props.description.length > 80 ? 
        props.description.slice(0, 80) + "..." : 
        props.description))

    // use this if you want more date formatting https://www.w3schools.com/jsref/jsref_getmonth.asp

    const created = new Date(props.created)
    const dateCreated = `${created.getFullYear()}-${created.getMonth()+1}-${created.getDate()}`;

    const updated = new Date(props.updated);
    const dateUpdated = `${updated.getFullYear()}-${updated.getMonth()+1}-${updated.getDate()}`;

    return (
        <Roll bottom >
            <Card style={{ width: '45rem' }} bg='light' text='dark'>
                <Card.Header><Card.Subtitle>{props.language}</Card.Subtitle></Card.Header>
                <Card.Body>
                    <a href={props.url} target="_blank" rel="noopener noreferrer"><Card.Title>{title}</Card.Title></a>
                    <Card.Text>{description}</Card.Text>
                    <p className="timestamp">updated: {dateUpdated}</p>
                    <p className="timestamp">created: {dateCreated}</p>
                </Card.Body>
            </Card>
        </Roll>
    )
}

export default Project;
