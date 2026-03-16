import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/consultants" className={({ isActive }) => (isActive ? 'active' : '')}>
            Konsulttien Hallinta
          </NavLink>
        </li>
        <li>
          <NavLink to="/teams" className={({ isActive }) => (isActive ? 'active' : '')}>
            Tiimien Hallinta
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>
            Käyttäjähallinta
          </NavLink>
        </li>
        <li className="navbar__theme">
          <button type="button" className="navbar__themeButton" onClick={onToggleTheme}>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
