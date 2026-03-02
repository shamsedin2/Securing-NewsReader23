import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useArticles } from '../context/ArticlesContext';
import ArticleCard from '../components/ArticleCard';
import '../styles/AdminPage.css';

const AdminPage = () => {
  const { isAdmin } = useAuth();
  const { getAllUserArticles } = useArticles();

  // Redirect if not admin
  if (!isAdmin()) {
    return <Navigate to="/" replace />;
  }

  const allUserArticles = getAllUserArticles();
  const usernames = Object.keys(allUserArticles);

  return (
    <div className="page-container">
      <h1 className="page-title">Admin Dashboard</h1>
      <p className="admin-subtitle">View all saved articles by user</p>
      
      {usernames.length === 0 ? (
        <div className="no-articles">
          <p>No users have saved articles yet.</p>
        </div>
      ) : (
        <div className="admin-content">
          {usernames.map(username => (
            <div key={username} className="user-section">
              <h2 className="user-header">
                {username}'s Saved Articles ({allUserArticles[username].length})
              </h2>
              
              {allUserArticles[username].length === 0 ? (
                <p className="no-user-articles">This user hasn't saved any articles.</p>
              ) : (
                <div className="articles-grid">
                  {allUserArticles[username].map((article, index) => (
                    <ArticleCard key={index} article={article} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
