import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Perpetual</Link>
      </div>

      <div className="nav-links">
        <Link to="/" className="nav-item">
          <FaHome className="icon mobile-only" /> <span>HOME</span>
        </Link>
        <Link to="/about" className="nav-item">
          <FaUser className="icon mobile-only" /> <span>ABOUT</span>
        </Link>
        <Link to="/projects" className="nav-item">
          <FaProjectDiagram className="icon mobile-only" /> <span>POJECTS</span>
        </Link>
        <Link to="/skills" className="nav-item">
          <FaTools className="icon mobile-only" /> <span>SKILLS</span>
        </Link>
        <Link to="/contact" className="nav-item">
          <FaEnvelope className="icon mobile-only" /> <span>CONTACTS</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
