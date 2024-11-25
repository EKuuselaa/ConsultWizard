import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav style={{ padding: '10px', background: '#f4f4f4', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Etusivu</Link>
        <Link to="/consultants" style={{ marginRight: '10px' }}>Konsultit</Link>
        <Link to="/admin">Hallinta</Link>
      </nav>
    );
  };

  export default Navbar;