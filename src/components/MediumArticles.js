// src/components/MediumArticles.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RSSParser from 'rss-parser';

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const mediumRssFeedUrl = 'https://medium.com/feed/@truegradientai'; // Replace with your Medium username
    fetchMediumArticles(mediumRssFeedUrl);
  }, []);

  const fetchMediumArticles = async (rssFeedUrl) => {
    try {
      const response = await axios.get(rssFeedUrl, { responseType: 'text' });
      const parser = new RSSParser();
      const feed = await parser.parseString(response.data);
      const fetchedArticles = feed.items.map((item) => ({
        title: item.title,
        url: item.link,
        content: item.content || item.contentSnippet,
      }));
      setArticles(fetchedArticles);
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
    }
  };

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index} className="article">
          <h2>{article.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default MediumArticles;
