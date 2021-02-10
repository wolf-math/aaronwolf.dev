import React from 'react';
import Roll from 'react-reveal/Roll';

import './project.scss';
import Card from 'react-bootstrap/Card';

const Project = ({title, description, language, url, created, updated}) => {

    // remove dashes and underscores and capitalize titles.
    title = title.charAt(0).toUpperCase() + title.slice(1).replace(/-/g, " ").replace(/_/g, " ");

    // truncate description. 
    description = (description === null ? " " : (        
        description.length > 70 ? 
        description.slice(0, 70) + "..." : 
        description))

    // use this if you want more date formatting https://www.w3schools.com/jsref/jsref_getmonth.asp

    created = new Date(created)
    const dateCreated = `${created.getFullYear()}-${created.getMonth()+1}-${created.getDate()}`;

    updated = new Date(updated);
    const dateUpdated = `${updated.getFullYear()}-${updated.getMonth()+1}-${updated.getDate()}`;

    return (
        <Roll bottom >
            <Card style={{ width: '60%' }} bg='dark' text='light'>
                <Card.Header><Card.Subtitle>{language}</Card.Subtitle></Card.Header>
                <Card.Body>
                    <a href={url} target="_blank" rel="noopener noreferrer"><Card.Title>{title}</Card.Title></a>
                    <Card.Text>{description}</Card.Text>
                    <p className="timestamp">updated: {dateUpdated}</p>
                    <p className="timestamp">created: {dateCreated}</p>
                </Card.Body>
            </Card>
        </Roll>
    )
}

export default Project;
