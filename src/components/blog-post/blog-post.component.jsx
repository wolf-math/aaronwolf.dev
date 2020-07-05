import react from 'react';

import './blog-post.style.scss';

const blogPost = (props) => {
    return (
        <div className="card">
            <cardImage />
            <cardBody>
                <cardTitle>

                </cardTitle>
                <cardSubtitle>
                    <badge />
                </cardSubtitle>
            </cardBody>
        </div>
    )
}

export default blogPost;