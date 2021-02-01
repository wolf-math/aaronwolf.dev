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
                {/* <Project title="This is a really really really really long title" description="One time I hired a monekey to take notes for me in class. I would just sit there with my mind a complete blank while the monkey would scribble on little pieces of paper" /> */}
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