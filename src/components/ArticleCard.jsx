import { useAuth } from '../context/AuthContext';
import { useArticles } from '../context/ArticlesContext';
import '../styles/ArticleCard.css';

const ArticleCard = ({ article }) => {
  const { isAuthenticated } = useAuth();
  const { saveArticle, removeArticle, isArticleSaved } = useArticles();

  const saved = isArticleSaved(article.url);

  const handleSaveToggle = () => {
    if (saved) {
      removeArticle(article.url);
    } else {
      saveArticle(article);
    }
  };

  return (
    <div className="article-card">
      {article.multimedia && article.multimedia[0] && (
        <img 
          src={article.multimedia[0].url} 
          alt={article.title}
          className="article-image"
        />
      )}
      
      <div className="article-content">
        <h3 className="article-title">{article.title}</h3>
        <p className="article-abstract">{article.abstract}</p>
        <p className="article-byline">{article.byline}</p>
        
        <div className="article-footer">
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="read-more"
          >
            Read Full Article →
          </a>
          
          {isAuthenticated() && (
            <button 
              onClick={handleSaveToggle}
              className={`save-button ${saved ? 'saved' : ''}`}
            >
              {saved ? '★ Saved' : '☆ Save'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
