import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBars, faUser } from '@fortawesome/free-solid-svg-icons';

// PUBLIC_INTERFACE
/**
 * Navigation bar component for AutoRentEase.
 * Displays the logo, navigation links, and user actions.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <FontAwesomeIcon icon={faCar} /> AutoRentEase
          </Link>
          
          <div className="nav-links">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/cars" className="nav-link">Cars</Link>
            <Link to="/deals" className="nav-link">Special Deals</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          
          <div className="nav-actions">
            <Link to="/account" className="btn btn-outline">
              <FontAwesomeIcon icon={faUser} /> Account
            </Link>
          </div>
          
          {/* Mobile menu button - would be connected to state in a full implementation */}
          <button className="btn btn-outline mobile-menu-btn" style={{display: 'none'}}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
