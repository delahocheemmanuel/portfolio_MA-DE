import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TwitterIcon = () => {
  const twitterURL = 'https://twitter.com/DelahocheManu'; // Votre lien Twitter

  return (
    <a href={twitterURL} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  );
};

export default TwitterIcon;
