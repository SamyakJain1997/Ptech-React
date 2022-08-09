import React from 'react';
import './article.css';

const Article = ({ imgUrl, heading, text }) => (
  <div className="image">
    <img className="image__img" src={imgUrl} alt="blog_image" />
    <div className="image__overlay">
      <div className="image__title">{heading}</div>
      <p className="image__description">{text}</p>  
    </div>
      <h3 className="title">{heading}</h3>
  </div>
);

export default Article;
