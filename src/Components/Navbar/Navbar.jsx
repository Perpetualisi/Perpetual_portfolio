import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">Perpetual</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={handleLinkClick} className="nav-item">Home</Link>
        <Link to="/about" onClick={handleLinkClick} className="nav-item">About</Link>
        <Link to="/projects" onClick={handleLinkClick} className="nav-item">Projects</Link>
        <Link to="/skills" onClick={handleLinkClick} className="nav-item">Skills</Link>
        <Link to="/contact" onClick={handleLinkClick} className="nav-item">Contact</Link>
      </div>

      <div className="menu-icon" onClick={handleToggle}>
        {isOpen ? <span className="cancel-icon">&#10005;</span> : <span className="hamburger-icon">&#9776;</span>}
      </div>
    </nav>
  );
};

export default Navbar;
