import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import '../styles/HomePage.css';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTopStories();
  }, []);

  const fetchTopStories = async () => {
    const apiKey = import.meta.env.VITE_NY_TIMES_API_KEY;
    
    if (!apiKey) {
      setError('API key not found. Please add VITE_NY_TIMES_API_KEY to your .env file.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }

      const data = await response.json();
      setArticles(data.results.slice(0, 20));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">Loading top stories...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="error-message">
          <h2>Error Loading Articles</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Top Stories</h1>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
