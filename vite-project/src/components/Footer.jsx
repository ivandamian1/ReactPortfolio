import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://github.com/ivandamian1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/ivan-adrover-3a0b76218/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://stackoverflow.com/users/27061579/ivan-adrover"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stack Overflow"
        >
          <FaStackOverflow size={30} />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
