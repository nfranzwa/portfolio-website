import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact flex items-center justify-center">
      <div className="container contact-container text-center animate-fade-in-up delay-100">
        <h2 className="section-title">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="contact-description">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open. 
          I'm currently looking for new opportunities and would love to chat!
        </p>
        <a href="mailto:nicholas.franzwa@example.com" className="btn btn-primary contact-btn">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
