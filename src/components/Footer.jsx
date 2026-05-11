import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex justify-between items-center footer-container">
        <p className="copyright">
          © {new Date().getFullYear()} Nicholas Franzwa. All rights reserved.
        </p>
        <div className="footer-links flex gap-4">
          <a href="https://github.com/nfran" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/nicholas-franzwa" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
