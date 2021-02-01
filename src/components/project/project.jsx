import React from 'react';

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

    return (
            <Card style={{ width: '18rem' }} bg='dark' text='light'>
                <Card.Header><Card.Subtitle>{props.language}</Card.Subtitle></Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Link href={props.url} target="_blank" rel="noopener noreferrer">Link</Card.Link>
                </Card.Body>
            </Card>
    )
}

export default Project;
