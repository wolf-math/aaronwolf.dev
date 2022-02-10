import React from 'react';
import Badge from 'react-bootstrap/Badge';

import './post.style.scss'

const Post = (props) => {
  return(
    <div className="article">
      <div className="imgcap">
        <img src={props.cover} alt="post cover" />
      </div>
      <div className="cardbody">
        {props.tags.map(tag => (
          <Badge 
            variant="secondary"
            key={tag}
          >
            {tag}
          </Badge>
        ))}
          <h1 className="articletitle">{props.title}</h1>
          <p className="articlecontent">{props.description} <a href={props.url} target="_blank" rel="noopener noreferrer">Read on</a></p>
          <p className="timestamp">{props.timestamp}</p>                
        </div>
    </div>
  )
}

export default Post;