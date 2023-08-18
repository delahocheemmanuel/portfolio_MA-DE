import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__links">
          <a
            href="https://www.linkedin.com/in/emmanuel-delahoche-4791a0117"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/delahocheemmanuel"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub</span>
          </a>
          <a
            href="https://twitter.com/DelahocheManu"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
