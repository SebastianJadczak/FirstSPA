import React from 'react';
import '../styles/Article.css'
const Article = (props) => {
    // zamiast pisania props można użyc destrutyzacji
    // np. const Article = ( {title, text, author}=>{dalej już normalnie} )
    //nietrzeba używać przedrostka props
    return (
        <article>
            <h2 className="Article">{props.title}</h2>
            <p className="Article">{props.text}</p>
            <em className="Article">{props.author}</em>
        </article>
    );
}

export default Article;