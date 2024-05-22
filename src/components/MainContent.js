import React from 'react';
import Article from './Article'; // Import the Article component
import './MainContent.css';

const MainContent = () => {
  // Example data for articles
  const articles = [
    {
      title: 'Title 1',
      date: 'Today, 14:11h',
      excerpt: 'Lorem ipsum dolor sit amet...',
      author: 'Authorame',
      imageUrl: 'article1.jpg', // Replace with actual image URL
    },
    {
      title: 'Title 2',
      date: 'Today, 14:11h',
      excerpt: 'Lorem ipsum dolor sit amet...',
      author: 'Authorame',
      imageUrl: 'article1.jpg', // Replace with actual image URL
    },
    {
      title: 'Title 3',
      date: 'Today, 14:11h',
      excerpt: 'Lorem ipsum dolor sit amet...',
      author: 'Authorame',
      imageUrl: 'article1.jpg', // Replace with actual image URL
    }
    // Add more articles here...
  ];

  return (
    <div className="main-content">
      {articles.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </div>
  );
};

export default MainContent;
