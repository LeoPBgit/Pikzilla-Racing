import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <img src="/assets/Logo/Pikzilla Logo.svg" alt="Pikzilla Racing" />
            </Link>
          </div>
          <nav className="main-nav">
            <ul className="flex gap-lg">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/team">TEAM</Link></li>
              <li><Link to="/cars">CARS</Link></li>
              <li><Link to="/racing">RACING</Link></li>
              <li><Link to="/blog">BLOG</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
