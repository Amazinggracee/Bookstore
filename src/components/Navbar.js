// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div className="navbar-container">
//       <h1>Bookstore</h1>
//       <nav className="navbar">
//         <ul className="nav-items">
//           <li className="nav-links">
//             <Link to="/">Books</Link>
//           </li>
//           <li className="nav-links">
//             <Link to="/categories">Categories</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
// export default Navbar;

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
        <h2 className="logo">Bookstore</h2>
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
