import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

import './portfolio.style.scss'
import {Jumbotron, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
  
import Navbar from '../../components/navbar/navbar.component';


const Portfolio = () => {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        axios.get("https://api.github.com/users/wolf-math/repos").then((res)=>{
          setRepos(res.data.filter(repo => repo.fork===false).sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at)));
        })
      }, [])

    // const projects = [
    //     {
    //         "id": 1,
    //         "name": "Aaron.Wolf.dev",
    //         "url": "https://aaronwolf.dev",
    //         "github": "https://github.com/wolf-math/aaronwolf.dev",
    //         "image": "../../assets/wolfdev.png",
    //         "languages": "JavaScript - ReactJS"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Caya Coffee Co",
    //         "url": "https://cayacoffee.co",
    //         "github": "https://github.com/wolf-math/coffeeshop",
    //         "image": "../../assets/caya.png",
    //         "languages": "JavaScript - ReachJS"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Swish",
    //         "url": "http://justswish.com",
    //         "github": "https://github.com/wolf-math/swish",
    //         "image": "../../assets/swish.png",
    //         "languages": "Ruby on Rails"
    //     },
    //     {
    //         "id": 4,
    //         "name": "Cleveland Karate",
    //         "url": "https://clevelandshotokan.wordpress.com/",
    //         "image": "",
    //         "github": "",
    //         "languages": "Wordpress"
    //     }
    // ]
// const Work = (id, name, url, github, image, languages) 

    return(
        <>
            <Navbar />

            <Jumbotron>
                <h1>Portfolio</h1>
                <h3>My GitHub projects.</h3>
            </Jumbotron>
            
            <Carousel>

                {repos.map((repo)=> (
                    <Carousel.Item>
                        <div className='carouselCap'>

                        <Card style={{ width: '66%'}} bg="dark" text="light">
                        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                        <Card.Body>
                            <Card.Title>{repo.name}</Card.Title>
                            <Card.Text>
                            {repo.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup >
                            <ListGroupItem variant="dark">Language: {repo.language}</ListGroupItem>
                            <ListGroupItem variant="dark">Created: {repo.created_at}</ListGroupItem>
                            <ListGroupItem variant="dark">Updated: {repo.updated_at}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href={repo.html_url}>{repo.html_url}</Card.Link>
                            {/* <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                        </Card>
                        </div>
                  </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default Portfolio;
