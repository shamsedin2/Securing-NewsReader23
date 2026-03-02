import { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import '../styles/SearchPage.css';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!query.trim()) return;

    const apiKey = import.meta.env.VITE_NY_TIMES_API_KEY;
    
    if (!apiKey) {
      setError('API key not found. Please add VITE_NY_TIMES_API_KEY to your .env file.');
      return;
    }

    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(query)}&api-key=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to search articles');
      }

      const data = await response.json();
      const processedArticles = data.response.docs.map(doc => ({
        title: doc.headline.main,
        abstract: doc.abstract,
        url: doc.web_url,
        byline: doc.byline?.original || '',
        multimedia: doc.multimedia?.length > 0 
          ? [{ url: `https://www.nytimes.com/${doc.multimedia[0].url}` }]
          : []
      }));
      
      setArticles(processedArticles);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Search Articles</h1>
      
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for articles..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <div className="loading">Searching...</div>}

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {searched && !loading && articles.length === 0 && (
        <div className="no-results">
          <p>No articles found for "{query}"</p>
        </div>
      )}

      {articles.length > 0 && (
        <div className="articles-grid">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
