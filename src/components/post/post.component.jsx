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
                {props.tags.map(tag => <Badge variant="secondary">{tag}</Badge>)}
                
                <h1 className="articletitle">{props.title}</h1>
                <p className="articlecontent">{props.content} <a href={props.url}>Read on</a></p>
                <p className="timestamp">{props.timestamp}</p>

                
            </div>
        </div>

        // <Card style={{width: '18rem'}}>
        //     <Card.Img  variant="top" src={props.cover} />
        //     <Card.Body>
        //         <Card.Title>{props.title}</Card.Title>
        //         <Card.Text>{props.content}</Card.Text>
        //         <Card.Link href={props.url}>Read on</Card.Link>
        //     </Card.Body>
        // </Card>
    )
}

export default Post;