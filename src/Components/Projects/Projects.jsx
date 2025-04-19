
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
            <h3>PAMS Beauty Saloon Landing Page</h3>
            <p>A sleek and elegant landing page for PAMS Beauty Saloon, built with React and featuring smooth animations, modern design, and a responsive user experience.</p>
            <div className="project-links">
              <a href="https://pams-beauty-saloon.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href="https://github.com/Perpetualisi/Pams-Beauty-Saloon" target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Projects;
