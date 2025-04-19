import React from 'react';
import './Skills.css';
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiWordpress } from 'react-icons/si';

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Python", icon: <FaPython /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "WordPress", icon: <SiWordpress /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">🚀 My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
