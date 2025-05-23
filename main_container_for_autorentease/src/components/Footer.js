import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

// PUBLIC_INTERFACE
/**
 * Footer component for AutoRentEase.
 * Displays company information, useful links, and social media.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <Link to="/" className="logo" style={{marginBottom: '16px', display: 'inline-block'}}>
              <FontAwesomeIcon icon={faCar} /> AutoRentEase
            </Link>
            <p>
              The best car rental platform with high-quality services and a wide range of vehicles.
              Making renting easy, affordable, and reliable.
            </p>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/careers" className="footer-link">Careers</Link>
              <Link to="/blog" className="footer-link">Blog</Link>
              <Link to="/how-it-works" className="footer-link">How It Works</Link>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Support</h3>
            <div className="footer-links">
              <Link to="/help" className="footer-link">Help Center</Link>
              <Link to="/faq" className="footer-link">FAQ</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
              <Link to="/terms" className="footer-link">Terms of Service</Link>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter for the latest news and offers.</p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AutoRentEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
