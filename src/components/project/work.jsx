import React from "react";

import "./work.scss";

const Work = (id, name, url, github, image, languages) => {
    return (
        <div className="work">
            <div className="image-cap">
                <img src={image} />
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