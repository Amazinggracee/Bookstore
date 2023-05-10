import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <h1>Bookstore</h1>
      <nav className="navbar">
        <ul className="nav-items">
          <li className="nav-links">
            <Link to="/">Books</Link>
          </li>
          <li className="nav-links">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
