import React from 'react';
import { Link } from 'react-router-dom';  
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <video
        className="video-bg"
        src="/hero-bg1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-gradient"></div>
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Crafting Modern & Creative Web Experiences</p>
        <Link to="/projects" className="hero-btn">View My Work</Link>
      </div>
    </section>
  );
};

export default Hero;
