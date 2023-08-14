import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkedInIcon = () => {
  const linkedInURL = 'https://www.linkedin.com/in/emmanuel-delahoche-4791a0117'; // Votre lien LinkedIn

  return (
    <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  );
};

export default LinkedInIcon;

