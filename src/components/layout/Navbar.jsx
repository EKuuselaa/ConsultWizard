import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
      </ul>
    </nav>
  );
};

export default Navbar;
