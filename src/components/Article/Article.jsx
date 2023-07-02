import React, { useState } from 'react';
import './Article.css';

const Article = (props) => {

    const [data, setData] = useState('Like');

    const updateData = () => {
        const newData = 'I liked';
        setData(newData);
    };

    const [comment, setComment] = useState();
    const [post, setPosted] = useState('Post');

    const postButton = () => {
        const posted = 'Posted';
        setPosted(posted);
        setInterval(() => {
            setPosted('Post');
        }, 3000);
    }

    const commentButton = () => {

    }

    return (
        <div className='article'>
            <h1 className='question'>
                {props.question}
            </h1>
            <p className='answer'>
                <p className='ans'>Answer:</p>
                {props.answer}
            </p>
            <p>
                <span
                    onClick={updateData}
                >
                    {data}
                </span>
            </p>

            <p>{ }</p>

            <p className='comment'>Reply:</p>
            <textarea placeholder='Write something...'></textarea>
            <p>
                <span onClick={postButton}>{post}</span>
            </p>
        </div>
    );
};

export default Article;