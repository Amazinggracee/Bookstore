import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const navigation = useNavigate();

  const handleBookPage = () => {
    navigation('/');
  };

  const handleCategoriesPage = () => {
    navigation('/categories');
  };

  return (
    <nav className="navContainer">
      <div className="links">
        <h2 className="logo">Bookstore CMS</h2>
        <ul className="navLinks">
          <li>
            <button type="button" onClick={handleBookPage} className="books">
              Books
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={handleCategoriesPage}
              className="categories"
            >
              Categories
            </button>
          </li>
        </ul>
      </div>
      <div className="userCircle">
        <FontAwesomeIcon icon={faUser} className="user" />
      </div>
    </nav>
  );
};

export default Navbar;
