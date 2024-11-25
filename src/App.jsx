import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sivu- tai näkymäkomponentit
import HomePage from './pages/HomePage/';
import ConsultantsPage from './pages/ConsultantsPage';
import UserManagementPage from './pages/UserManagementPage';

function App() {
  return (
    <Router>
      {/* Navigaatiopalkki näkyy kaikilla sivuilla */}
      <Navbar />
      
      {/* Reititys eri sivuille */}
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consultants" element={<ConsultantsPage />} />
          <Route path="/admin" element={<UserManagementPage />} />
        </Routes>
      </main>

      {/* Footer näkyy kaikilla sivuilla */}
      <Footer />
    </Router>
  );
}

export default App;
