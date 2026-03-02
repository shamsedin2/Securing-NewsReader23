import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useArticles } from '../context/ArticlesContext';
import '../styles/Navigation.css';

const Navigation = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const { getUserSavedArticles } = useArticles();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const savedCount = isAuthenticated() ? getUserSavedArticles().length : 0;

  return (
    <nav className="navigation">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          NewsReader
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/search" className="nav-link">Search</Link>
          <Link to="/saved" className="nav-link">
            Saved Articles ({savedCount})
          </Link>
          {isAdmin() && (
            <Link to="/admin" className="nav-link">Admin</Link>
          )}
        </div>

        <div className="nav-auth">
          {isAuthenticated() ? (
            <div className="user-section">
              <span className="username">{user.username}</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
