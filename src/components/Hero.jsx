import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero flex items-center">
      <div className="container hero-container grid">
        <div className="hero-content animate-fade-in-up">
          <p className="hero-greeting text-gradient">Hi, I'm Nicholas Franzwa</p>
          <h1 className="hero-title">
            Mechanical & Software <br /> Engineer.
          </h1>
          <p className="hero-description">
            I specialize in building complex electromechanical systems, robotics, and robust software solutions. Passionate about solving hard engineering problems from the physical layer up to the cloud.
          </p>
          
          <div className="hero-cta flex items-center gap-6">
            <a href="#projects" className="btn btn-primary flex items-center gap-4">
              View My Work <FaArrowRight />
            </a>
            <div className="social-links flex gap-4">
              <a href="https://github.com/nfran" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/nicholas-franzwa" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:nicholas.franzwa@example.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in-up delay-200">
          <div className="glass visual-card">
            <div className="code-snippet">
              <div className="dots flex gap-4">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <pre>
                <code>
<span className="token keyword">class</span> <span className="token class-name">Engineer</span> {'{'}
<br/>  <span className="token property">skills</span> = [<span className="token string">'Robotics'</span>, <span className="token string">'Embedded Systems'</span>, <span className="token string">'Software'</span>];
<br/>  <span className="token function">build</span>() {'{'}
<br/>    <span className="token keyword">return</span> <span className="token string">"Innovation"</span>;
<br/>  {'}'}
<br/>{'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
