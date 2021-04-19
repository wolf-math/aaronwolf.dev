import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

import './portfolio.style.scss'
import {Jumbotron, Container, Carousel} from 'react-bootstrap';

import Navbar from '../../components/navbar/navbar.component';
import Project from '../../components/project/project';
import Post from '../../components/post/post.component';


const Portfolio = () => {

    // const [repos, setRepos] = useState([])

    // useEffect(() => {
    //     axios.get("https://api.github.com/users/wolf-math/repos").then((res)=>{
    //       setRepos(res.data.filter(repo => repo.fork===false).sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at)));
    //     })
    //   }, [])

    const projects = [
        {
            "id": 1,
            "name": "Aaron.Wolf.dev",
            "url": "https://aaronwolf.dev",
            "github": "https://github.com/wolf-math/aaronwolf.dev",
            "image": "../../assets/wolfdev.png",
            "languages": "JavaScript - ReactJS"
        },
        {
            "id": 2,
            "name": "Caya Coffee Co",
            "url": "https://cayacoffee.co",
            "github": "https://github.com/wolf-math/coffeeshop",
            "image": "../../assets/caya.png",
            "languages": "JavaScript - ReachJS"
        },
        {
            "id": 3,
            "name": "Swish",
            "url": "http://justswish.com",
            "github": "https://github.com/wolf-math/swish",
            "image": "../../assets/swish.png",
            "languages": "Ruby on Rails"
        },
        {
            "id": 4,
            "name": "Cleveland Karate",
            "url": "https://clevelandshotokan.wordpress.com/",
            "github": "",
            "languages": "Wordpress"
        }
    ]

    return(
        <>
            <Navbar />

            <Jumbotron fluid>
            <Container>
                <h1>Portfolio</h1>
                <h3>My GitHub projects.</h3>
            </Container>
            </Jumbotron>
            
            <Carousel>
                <Carousel.Item interval={1000}>
                    <h1>Hi</h1>
                    <Carousel.Caption>
                        <Post>
                        title="Legacy"
                    cover=
                    {/* content={post.description}
                    url={post.url} */}
                        </Post>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Portfolio;