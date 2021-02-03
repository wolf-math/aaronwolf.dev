import React from 'react';
import Roll from 'react-reveal/Roll';
import Badge from 'react-bootstrap/Badge';

import './post.style.scss'

const Post = (props) => {

    return(
        <Roll bottom> 
            <div className="article">
                <div className="imgcap">
                    <img src={props.cover} alt="post cover" />
                </div>
                <div className="cardbody">
                    {props.tags.map(tag => <Badge 
                    variant="secondary"
                    key={Math.floor(Math.random() * 1000)}
                    >{tag}</Badge>)}
                    
                    <h1 className="articletitle">{props.title}</h1>
                    <p className="articlecontent">{props.content} <a href={props.url} target="_blank" rel="noopener noreferrer">Read on</a></p>
                    <p className="timestamp">{props.timestamp}</p>                
                </div>
            </div>
        </Roll>
    )
}

export default Post;