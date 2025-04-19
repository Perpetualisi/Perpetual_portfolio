
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">🚀 My Projects</h2>

      <div className="projects-list">

        <div className="project-card">
          <div className="project-content">
            <h3>Educational Website</h3>
            <p>A React-based educational platform designed with a modern, responsive layout, smooth animations, and interactive features to enhance learning experiences.</p>
            <div className="project-links">
              <a href="https://okan-perpetual-isi.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href="https://github.com/Perpetualisi/Educational-website" target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>Tech Website</h3>
            <p>A modern React-based tech website, designed using Vite for fast performance, featuring smooth animations, a responsive layout, and a user-friendly experience.</p>
            <div className="project-links">
              <a href="https://tech-website-theta.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href="https://github.com/Perpetualisi/Tech-Website" target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>Restaurant Menu & Ordering System</h3>
            <p>A modern React-based restaurant menu with an interactive ordering system, designed using Vite for fast performance and a responsive, user-friendly experience.</p>
            <div className="project-links">
              <a href="https://tasty-bite-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href="https://github.com/Perpetualisi/Tasty-bite" target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>Dentalcare Website</h3>
            <p>A modern React-based dental care website with an interactive appointment booking system, designed using Vite for fast performance and a responsive, user-friendly experience.</p>
            <div className="project-links">
              <a href="https://dentalcare-website-orcin.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href="https://github.com/Perpetualisi/Dentalcare-website" target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
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
