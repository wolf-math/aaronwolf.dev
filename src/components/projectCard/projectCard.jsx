import React from 'react';
import './projectCard.scss'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

import logo from '../../assets/wolf-logo_D5.png';
import bash from '../../assets/bash.png';
import caya from '../../assets/caya.png';
import javascript from '../../assets/javascript.png';
import latex from '../../assets/latex.png';
import python from '../../assets/python.png';
import swish from '../../assets/swish.png';
import wolfdev from '../../assets/wolfdev.png';
import jupyter from '../../assets/jupyter.png'

export default function ProjectCard (repo) {

    let imageCap

    switch (repo.repo.language) {
        case 'JavaScript':
            imageCap = javascript
            break;
        case 'Python':
            imageCap = python
            break;
        case 'TeX':
            imageCap = latex
            break;
        case 'Shell':
            imageCap = bash
            break
        case 'Jupyter Notebook':
            imageCap = jupyter
            break
        default:
            imageCap = logo
    }

    switch (repo.repo.name) {
        case 'coffeeshop':
            imageCap= caya
            break;
        case 'aaronwolf.dev':
            imageCap = wolfdev
            break
        case 'swish':
            imageCap = swish
            break
        default:
            console.log('done')
    }

    return(
        <Card style={{ width: '70%'}} bg="dark" text="light">
            <Card.Header>
                <Card.Img variant="top" src={imageCap} className="cap" />
            </Card.Header>
            <Card.Body>
                <Card.Title>{repo.repo.name}</Card.Title>
                <Card.Text>
                    {repo.repo.description}
                </Card.Text>
            </Card.Body>
            <ListGroup >
                <ListGroupItem variant="dark">Language: {repo.repo.language}</ListGroupItem>
                <ListGroupItem variant="dark">Created: {repo.repo.created_at}</ListGroupItem>
                <ListGroupItem variant="dark">Updated: {repo.repo.updated_at}</ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Card.Link href={repo.repo.html_url}>{repo.repo.html_url}</Card.Link>
            </Card.Body>
        </Card>
)}