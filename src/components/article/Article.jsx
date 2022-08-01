import React from 'react';
import './article.css';

const Article = ({ imgUrl, heading, text }) => (
  <div className="ptech__blog-container_article">
    <div className="ptech__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="ptech__blog-container_article-content">
      <div>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default Article;
