import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const ArticlesContext = createContext();

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within an ArticlesProvider');
  }
  return context;
};

export const ArticlesProvider = ({ children }) => {
  const { user } = useAuth();
  // Structure: { username: [articles...] }
  const [savedArticlesByUser, setSavedArticlesByUser] = useState({});

  // Load saved articles from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedArticlesByUser');
    if (saved) {
      setSavedArticlesByUser(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever articles change
  useEffect(() => {
    localStorage.setItem('savedArticlesByUser', JSON.stringify(savedArticlesByUser));
  }, [savedArticlesByUser]);

  const saveArticle = (article) => {
    if (!user) return;

    setSavedArticlesByUser(prev => {
      const userArticles = prev[user.username] || [];
      
      // Check if article already saved
      if (userArticles.some(a => a.url === article.url)) {
        return prev;
      }

      return {
        ...prev,
        [user.username]: [...userArticles, article]
      };
    });
  };

  const removeArticle = (articleUrl) => {
    if (!user) return;

    setSavedArticlesByUser(prev => {
      const userArticles = prev[user.username] || [];
      return {
        ...prev,
        [user.username]: userArticles.filter(a => a.url !== articleUrl)
      };
    });
  };

  const isArticleSaved = (articleUrl) => {
    if (!user) return false;
    const userArticles = savedArticlesByUser[user.username] || [];
    return userArticles.some(a => a.url === articleUrl);
  };

  const getUserSavedArticles = () => {
    if (!user) return [];
    return savedArticlesByUser[user.username] || [];
  };

  const getAllUserArticles = () => {
    return savedArticlesByUser;
  };

  const value = {
    savedArticlesByUser,
    saveArticle,
    removeArticle,
    isArticleSaved,
    getUserSavedArticles,
    getAllUserArticles,
  };

  return <ArticlesContext.Provider value={value}>{children}</ArticlesContext.Provider>;
};
