import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Add CSS for styling

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
];

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return ( 
    <div className="container">
      <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
    </div>
    
  );
};

export default Login;
