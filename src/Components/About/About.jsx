import React, { useEffect, useState } from 'react';
import './About.css';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  "Hello, I’m Okan!",
  "I build premium websites",
  "I design clean UIs",
  "I bring ideas to life",
  "I write scalable code",
  "I craft responsive layouts",
  "I create smooth animations",
  "I develop in React & WordPress"
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // change phrase every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-section">
      <motion.div 
        className="about-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="about-3d-text">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {phrases[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.div 
          className="about-description"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <h2>About Me</h2>
          <p>
            I'm a dedicated <strong>Frontend Developer</strong> focused on building modern, clean, and fully responsive websites. I specialize in <strong>React</strong>, delivering seamless, interactive digital experiences.
          </p>
          <p>
            With a passion for <strong>pixel-perfect design</strong>, performance optimization, and elegant animations, I turn code into visual art. I also build flexible websites using <strong>WordPress</strong>, helping clients scale their brands online.
          </p>
          <p>
            I explore cutting-edge tools, frameworks, and creative design systems daily. My mission? To turn bold ideas into beautiful, functional web products.
          </p>
          <a href="/Perpetual_cv.pdf" className="btn premium-btn" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
