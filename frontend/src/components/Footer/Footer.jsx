import React from 'react';
import  './Footer.css';
import LinkedInIcon from '../Social/Linkenin';
import GithubIcon from '../Social/Github';

const footer = () => {
  return (
    <footer>
      <div className="footer">
      <div className="footer__links">
        <LinkedInIcon />
        <GithubIcon />
        </div>
      </div>
    </footer>
  );
};

export default footer;
