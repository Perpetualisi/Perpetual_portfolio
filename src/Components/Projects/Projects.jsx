import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Ecommerce Website',
    description: 'Vendo is a sleek and modern eCommerce website built with React, Firebase, Vite, and CSS.',
    live: 'https://my-ecommerce-nine-iota.vercel.app/',
    code: 'https://github.com/Perpetualisi/MyEcommerce',
  },
  {
    title: 'Ice Cream Website',
    description: 'Frostify is a delightful ice cream website built with React and Vite.',
    live: 'https://ice-cream-iota-peach.vercel.app/',
    code: 'https://github.com/Perpetualisi/IceCream',
  },
  {
    title: 'Educational Website',
    description: 'A modern React-based educational website built with Vite and CSS.',
    live: 'https://okan-perpetual-isi.vercel.app/',
    code: 'https://github.com/Perpetualisi/Educational-website',
  },
  {
    title: 'The Cook Website',
    description: 'TheCook is a React-based food website with recipes and smooth UI.',
    live: 'https://thecook-alpha.vercel.app/',
    code: 'https://github.com/Perpetualisi/thecook',
  },
  {
    title: 'Weather App',
    description: 'A weather app with real-time updates using React and Vite.',
    live: 'https://weather-app-sigma-taupe-59.vercel.app/',
    code: 'https://github.com/Perpetualisi/weather-app',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio site built with React and CSS.',
    live: 'https://isi-portfolio2.vercel.app/',
    code: 'https://github.com/Perpetualisi/Isi-Portfolio2',
  },
];

const Projects = () => {
  const duplicated = [...projects, ...projects];

  return (
    <section className="projects-section">
      <h2 className="projects-title">🚀 My Projects</h2>

      <div className="scroll-wrapper">
        <div className="scroll-row row1">
          {duplicated.map((project, index) => (
            <div className="project-card" key={`r1-${index}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn">Live</a>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn">Code</a>
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-row row2">
          {duplicated.map((project, index) => (
            <div className="project-card" key={`r2-${index}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn">Live</a>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
