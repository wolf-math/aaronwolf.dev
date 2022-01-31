import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './blog.style.scss';
import {Jumbotron, Container} from 'react-bootstrap';

import Navbar from '../../components/navbar/navbar.component';
import Post from '../../components/post/post.component'

const Blog = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://dev.to/api/articles?username=wolfmath").then((res)=>{
          setPosts(res.data);
        })
      }, [])

    return (
        <>
            <Navbar />

            <Jumbotron fluid>
            <Container>
                
                <h1 id="head">My Writings from the Practical Dev.</h1>
   
            </Container>
            </Jumbotron>
            
            {posts.map(post => <Post key={post.id} 
                    title={post.title}
                    cover={post.cover_image}
                    content={post.description}
                    url={post.url}
                    timestamp={post.readable_publish_date}
                    tags={post.tag_list}
                />)}
        </>
    )
}


export default Blog;