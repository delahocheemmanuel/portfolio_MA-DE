import React from 'react';
import logo_MADE from '../../assets/images/logo/logo MA-DE.png';
import  './Footer.css';

const footer = () => {
  return (
    <footer>
      <div className="footer">
      <img className="logo_made" src={logo_MADE} alt="LOGO" />
        <h2>© 2023. All rights reserved</h2>
      </div>
    </footer>
  );
};

export default footer;
