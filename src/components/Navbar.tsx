import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav style={{ padding: '1rem', backgroundColor: '#282c34', color: '#fff' }}>
    <Link to="/" style={{ marginRight: '1rem', color: '#61dafb', textDecoration: 'none' }}>
      Home
    </Link>
    <Link to="/cart" style={{ color: '#61dafb', textDecoration: 'none' }}>
      Cart
    </Link>
  </nav>
);

export default Navbar;
