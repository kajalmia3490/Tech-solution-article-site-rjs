import React from 'react';
import Article from '../Article/Article';

const Container = () => {
    return (
        <div>
            <Article 
                question='What is JSX?'
                answer='JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.'
            />
        </div>
    );
};

export default Container;