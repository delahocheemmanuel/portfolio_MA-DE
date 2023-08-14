// components/GitHubIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const githubIcon = () => {
    const githubURL = 'https://github.com/delahocheemmanuel'; // Votre lien LinkedIn
  
    return (
      <a href={githubURL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    );
  };

export default githubIcon;
