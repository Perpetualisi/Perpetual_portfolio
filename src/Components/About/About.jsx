// src/Components/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-card">

        <div className="about-3d-text">
          <h1>Hello, I’m <span>Okan!</span></h1>
        </div>

        <div className="about-description">
          <h2>About Me</h2>
          <p>
            I'm a dedicated Frontend Developer with a strong focus on building modern, clean, and fully responsive websites.
            I specialize in React, and I’m passionate about creating seamless, interactive user experiences.
          </p>
          <p>
            I have hands-on experience in crafting pixel-perfect designs, optimizing performance, and integrating smooth animations and modern 3D-inspired UI effects.
            I’m also skilled in WordPress, allowing me to build flexible and dynamic websites for a wide range of clients.
          </p>
          <p>
            I continuously explore new technologies, creative design systems, and frameworks to stay ahead in the fast-evolving web space.
            My goal is to turn ideas into visually stunning and functional digital products.
          </p>
          <a href="/Perpetual_cv.pdf" className="btn">Download Resume</a> {/* Add your resume link */}
        </div>

      </div>
    </section>
  );
};

export default About;
