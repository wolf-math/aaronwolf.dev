import React, {useState, useEffect} from 'react';
import axios from 'axios';

// import './blog.style.scss';
import {Jumbotron, Container} from 'react-bootstrap';
import Loading from '../../components/Loading/Loading'
import Navbar from '../../components/navbar/navbar.component';
import Post from '../../components/post/post.component'

const Blog = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    setTimeout(function(){
      axios.get("https://dev.to/api/articles?username=wolfmath").then((res)=>{
        setPosts(res.data);
      })
    }, 2000);
  }, [])

  console.log(posts)

  return (
    <>
      <Navbar />
      <Jumbotron fluid>
      <Container>
        <h1 id="head">My Writings from the Practical Dev.</h1>
      </Container>
      </Jumbotron>
      {posts.length === 0 ? <Loading/> :
        posts.map(post => (
          <Post key={post.id} 
            title={post.title}
            cover={post.cover_image}
            description={post.description}
            url={post.url}
            timestamp={post.readable_publish_date}
            tags={post.tag_list}
          />
        ))
      }
    </>
  )
}


export default Blog;