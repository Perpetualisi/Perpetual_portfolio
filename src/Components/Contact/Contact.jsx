// src/Components/Contact/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>If you want to collaborate or know more, feel free to reach out!</p>
          <a href="mailto:perpetualokan0@gmail.com" className="btn contact-btn">Email Me</a>
          <a href="/Frontend Dev cv.pdf" className="btn contact-btn">Download CV</a>
        </div>

        {/* 3D Contact Form */}
        <div className="contact-form">
          <h3>Get In Touch</h3>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
