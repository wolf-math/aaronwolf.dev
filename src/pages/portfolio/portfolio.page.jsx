import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

import './portfolio.style.scss'
import {Jumbotron, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ProjectCard from '../../components/projectCard/projectCard';
  
import Navbar from '../../components/navbar/navbar.component';


const Portfolio = () => {

  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios.get("https://api.github.com/users/wolf-math/repos").then((res)=>{
      setRepos(res.data.filter(repo => repo.fork===false).sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at)));
      })
    }, [])

  return(
    <>
      <Navbar />
        <Jumbotron>
          <h1>Portfolio</h1>
          <h3>My GitHub projects.</h3>
        </Jumbotron>
        <Carousel>
          {repos.map((repo) => (
            <Carousel.Item>
              <div className='carouselCap'>
                <ProjectCard repo={repo} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
  )
}

export default Portfolio;
