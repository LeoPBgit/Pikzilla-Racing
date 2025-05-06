import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img src="/assets/Logo/Pikzilla Logo.svg" alt="Pikzilla Racing" />
            </Link>
          </div>
          
          <div className="footer-links">
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/racing">Racing</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p>Email: info@pikzillaracing.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Racing Lane, Speed City, SC 12345</p>
            </div>
            
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/Vectors/Social Media.svg" alt="Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/Vectors/Social Media.svg" alt="Twitter" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/Vectors/Social Media.svg" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pikzilla Racing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
