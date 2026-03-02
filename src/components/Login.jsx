import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('regular');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username.trim() && password.trim()) {
      login(username, password, accountType);
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login to NewsReader</h1>
        <p className="login-subtitle">Access your personalized news experience</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="accountType">Account Type</label>
            <select
              id="accountType"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value="regular">Regular User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="demo-info">
          <p><strong>Demo Accounts (for testing):</strong></p>
          <p>Any username/password combination will work</p>
          <p>Select "Regular" or "Admin" to test different access levels</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
