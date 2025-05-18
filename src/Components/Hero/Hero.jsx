import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const messages = [
  "Crafting Modern & Creative Web Experiences",
  "Building Fast & Responsive Websites",
  "Designing with Passion & Precision",
  "Transforming Ideas into Reality",
  "Delivering Quality Through Code",
  "Web Interfaces That Inspire",
  "Every Pixel With Purpose",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

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
        <p className="hero-subtitle slide-fade">{messages[index]}</p>
        <Link to="/projects" className="hero-btn">View My Work</Link>
      </div>
    </section>
  );
};

export default Hero;
