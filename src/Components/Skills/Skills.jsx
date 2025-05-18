import React from 'react';
import './Skills.css';
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiWordpress, SiFramer, SiWebflow } from 'react-icons/si';

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
  { name: "Framer", icon: <SiFramer /> },
  { name: "Webflow", icon: <SiWebflow /> },
];

const Skills = () => {
  const row1 = skills.slice(0, Math.ceil(skills.length / 2));
  const row2 = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section className="skills-marquee-section">
      <h2 className="skills-title">⚙️My Skills</h2>

      <div className="skills-row-wrapper">
        <div className="skills-row move-left">
          {[...row1, ...row1].map((skill, index) => (
            <div className="skill-item" key={`row1-${index}`}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="skills-row move-right">
          {[...row2, ...row2].map((skill, index) => (
            <div className="skill-item" key={`row2-${index}`}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
