import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';

// Sivu- tai näkymäkomponentit
import HomePage from './pages/HomePage/';
import ConsultantsPage from './pages/ConsultantsPage';
import UserManagementPage from './pages/UserManagementPage';
import TeamManagementPage from './pages/TeamManagementPage';

function App() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useMemo(
    () => () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    []
  );

  return (
    <Router className="header">
      {/* Navigaatiopalkki näkyy kaikilla sivuilla */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      
      {/* Reititys eri sivuille */}
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/consultants"
            element={
              <ProtectedRoute>
                <ConsultantsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<UserManagementPage />} />
          <Route
            path="/teams"
            element={
              <ProtectedRoute>
                <TeamManagementPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* Footer näkyy kaikilla sivuilla */}
      <Footer />
    </Router>
  );
}

export default App;
