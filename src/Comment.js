import React from 'react';
import fake from 'faker';

// Create a react component
const Comment = (props) => {
    console.log(props);
return (
            <div className="comment">
                <a href="/" className="avatar">
                <img alt="avatar" src={fake.image.avatar()} />
                </a>
                <div className="content">
                   <a href="/" className="author">{props.author} </a>
                   <div className="metadata">
                      <span className="date">{props.date}</span>
                   </div>
                   <div className="text">{props.content}</div>
                </div>
            </div>
);
}

export default Comment;