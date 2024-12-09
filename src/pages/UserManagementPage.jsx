import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './UserManagementPage.css';

const UserManagementPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/consultants'); // Ohjaa admin käyttöliittymään
    } else {
      setError('Virheellinen käyttäjänimi tai salasana');
    }
  };

  return (
    <div className="login-container">
      <h1>Admin Kirjautuminen</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Käyttäjänimi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Salasana"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Kirjaudu sisään</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default UserManagementPage;
