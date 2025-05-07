
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">🚀 My Projects</h2>

      <div className="projects-list">

        <div className="project-card">
          <div className="project-content">
            <h3>Ecommerce Website</h3>
            <p>Vendo is a sleek and modern eCommerce website built with React, Firebase, Vite, and CSS — delivering fast performance, secure transactions, and a smooth, responsive shopping experience.</p>
            <div className="project-links">
              <a href="https://my-ecommerce-nine-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href="https://github.com/Perpetualisi/MyEcommerce" target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>Ice Cream Website</h3>
            <p>Frostify is a delightful ice cream website built with React and Vite, offering a smooth, responsive experience with creamy animations and a sweet, user-friendly design.</p>
            <div className="project-links">
              <a href="https://ice-cream-iota-peach.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href="https://github.com/Perpetualisi/IceCream" target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>Educational Website</h3>
            <p>A modern React-based educational website, built with Vite and styled with CSS, offering fast performance, responsive design, and an engaging, user-friendly learning experience.</p>
            <div className="project-links">
              <a href="https://okan-perpetual-isi.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href="https://github.com/Perpetualisi/Educational-website" target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>The Cook Website</h3>
            <p>TheCook is a modern React-based food website built with Vite and CSS, featuring fast performance, a responsive layout, and an engaging, user-friendly experience for discovering delicious recipes and meal ideas.</p>
            <div className="project-links">
              <a href="https://thecook-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href="https://github.com/Perpetualisi/thecook" target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>Weather App</h3>
            <p>A modern React-based weather app website, designed using Vite for fast performance, featuring real-time weather updates and a responsive, user-friendly experience.</p>
            <div className="project-links">
              <a href="https://weather-app-sigma-taupe-59.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href="https://github.com/Perpetualisi/weather-app" target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>Portfolio Website</h3>
            <p>A sleek and elegant portfolio website for Okan Perpetual Isi, built with React and featuring smooth animations, modern design, and a responsive user experience.</p>
            <div className="project-links">
              <a href="https://isi-portfolio2.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href="https://github.com/Perpetualisi/Isi-Portfolio2" target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Projects;
