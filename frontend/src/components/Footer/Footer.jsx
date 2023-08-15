import React from 'react';
import  './Footer.css';
import LinkedInIcon from '../Social/Linkenin';
import GithubIcon from '../Social/Github';
import TwitterIcon from '../Social/Twitter';

const footer = () => {
  return (
    <footer>
      <div className="footer">
      <div className="footer__links">
        <LinkedInIcon />
        <GithubIcon />
        <TwitterIcon />
        </div>
      </div>
    </footer>
  );
};

export default footer;
