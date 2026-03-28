import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">
        <p className="footer-name">Venkatesh © {new Date().getFullYear()}</p>

        <div className="footer-icons">
          <a
            href="https://github.com/Venkatesh-subramaniyan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/Venkatesh-Subramaniyan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="srvenkat16@gmail.com"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>

        <p className="footer-message">Made with ❤️ & good vibes</p>
      </div>
    </footer>
  );
}
