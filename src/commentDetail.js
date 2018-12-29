import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (

        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Long
                    </a>
                <div className="metadata">
                    <span className="date">Today at 5:00 P.M</span>
                </div>
                <div className="text">Nice abcxyz!!!</div>
            </div>
        </div>
       
    )
}

export default CommentDetail;