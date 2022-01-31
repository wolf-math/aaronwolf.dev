import React from "react";

import "./work.scss";

const Work = ({key, name, url, github, image, languages}) => {
    return (
        <div className="work" key={key}>
            <div className="image-cap">
                <img src={image} alt={name} />
            </div>
            <div className="text">
                <h3>{name}</h3>
                <h2>{url}</h2>
                <h2>{github}</h2>
                <h2>{languages}</h2>
            </div>
        </div>
    )
}

export default Work