import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

import './portfolio.style.scss'
import {Jumbotron} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
  

import Navbar from '../../components/navbar/navbar.component';
// import Work from '../../components/project/work';
// import Post from '../../components/post/post.component';


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
                        <div className="carouselCap">
                            <a href={repo.html_url} >
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            {/* <Carousel.Caption>
                            </Carousel.Caption> */}
                            </a>
                        </div>
                  </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default Portfolio;