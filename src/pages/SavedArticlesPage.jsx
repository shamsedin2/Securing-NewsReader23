import { useArticles } from '../context/ArticlesContext';
import ArticleCard from '../components/ArticleCard';
import '../styles/SavedArticlesPage.css';

const SavedArticlesPage = () => {
  const { getUserSavedArticles } = useArticles();
  const savedArticles = getUserSavedArticles();

  return (
    <div className="page-container">
      <h1 className="page-title">My Saved Articles</h1>
      
      {savedArticles.length === 0 ? (
        <div className="no-articles">
          <p>You haven't saved any articles yet.</p>
          <p>Browse articles and click the "Save" button to add them here.</p>
        </div>
      ) : (
        <div className="articles-grid">
          {savedArticles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedArticlesPage;
