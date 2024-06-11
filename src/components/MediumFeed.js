import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';

const MediumFeed = ({ feedUrl }) => {
  const [articles, setArticles] = useState([]);
  const parser = new Parser();

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const feed = await parser.parseURL(feedUrl);
        setArticles(feed.items);
      } catch (error) {
        console.error('Error fetching the feed:', error);
      }
    };

    fetchFeed();
  }, [feedUrl]);

  return (
    <div>
      <h2>Medium Articles</h2>
      {articles.map((article) => (
        <div key={article.guid} style={{ marginBottom: '20px' }}>
          <h3><a href={article.link}>{article.title}</a></h3>
          <p>{article.contentSnippet}</p>
          <p><small>{new Date(article.pubDate).toLocaleDateString()}</small></p>
        </div>
      ))}
    </div>
  );
};

export default MediumFeed;
