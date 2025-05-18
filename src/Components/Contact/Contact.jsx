import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section fade-in-section">
      <div className="contact-container slide-in">

        <div className="contact-info fade-in">
          <h2 className="premium-title pulse">Let's Build <span>$10,000+</span> Projects</h2>
          <p className="text-glow">High-end, scalable, and premium solutions. Get in touch if you're ready for top-tier results.</p>
          <a href="mailto:perpetualokan0@gmail.com" className="btn contact-btn bounce">📧 Email Me</a>
          <a href="/Perpetual_cv.pdf" className="btn contact-btn bounce delay">📄 Download CV</a>
        </div>

        <div className="contact-form slide-up">
          <h3 className="animated-heading float">Get In Touch</h3>
          <form className="form-fade-in">
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="btn submit-btn glow">🚀 Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
