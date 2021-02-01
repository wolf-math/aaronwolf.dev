import React,{useState, useEffect} from 'react';
import axios from 'axios'; 

import './portfolio.style.scss'

import Navbar from '../../components/navbar/navbar.component';
import Project from '../../components/project/project';

const Portfolio = () => {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        axios.get("https://api.github.com/users/wolf-math/repos").then((res)=>{
          setRepos(res.data.filter(repo => repo.fork===false));
        })
      }, [])

    return(
        <>
            <Navbar />
            
            <h1>Portfolio</h1>

            <div className="projects">
            {repos.map(repo => <Project key={repo.id} 
                title={repo.name} 
                description={repo.description}
                language={repo.language}
                url={repo.html_url}
                />)}
            </div>
        </>
    )
}

export default Portfolio;