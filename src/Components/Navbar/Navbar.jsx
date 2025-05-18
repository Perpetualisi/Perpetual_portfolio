import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Perpetual</Link>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={handleLinkClick} className="nav-item">Home</Link>
        <Link to="/about" onClick={handleLinkClick} className="nav-item">About</Link>
        <Link to="/projects" onClick={handleLinkClick} className="nav-item">Projects</Link>
        <Link to="/skills" onClick={handleLinkClick} className="nav-item">Skills</Link>
        <Link to="/contact" onClick={handleLinkClick} className="nav-item">Contact</Link>
      </div>

      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <div className="bar top-bar"></div>
        <div className="bar middle-bar"></div>
        <div className="bar bottom-bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
