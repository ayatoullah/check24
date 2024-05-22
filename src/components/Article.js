import React from 'react';
import './Article.css';

const Article = ({ title, date, excerpt, author, imageUrl }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{excerpt}</p>
      <p>Author: {author}</p>
      <img src={imageUrl} alt="Article Picture" />
    </div>
  );
};

export default Article;
