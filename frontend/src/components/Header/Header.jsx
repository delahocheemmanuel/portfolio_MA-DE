import React from 'react';
import { Link } from 'react-router-dom';
import logo_MADE from '../../assets/images/logo/logo MA-DE.png';
import VotreComposant from '../../utils/darkMode';
import  './Header.css';


const Header  = () => {
  
  return (
    <header>
      <div className='header'>
      <VotreComposant />
      <img className="logo__made" src={logo_MADE} alt="LOGO" />
      <nav className="header__NavLink">
        
        <Link to="/home"> Accueil</Link>
        <Link to="/about" className="About" > A propos</Link>
        <Link to="/contact" className="Contact" >Contact</Link>
        <Link to="https://github.com/delahocheemmanuel" target="_blank" rel="noopener noreferrer">GitHub</Link>
      </nav>
      </div>
    </header>

  );
}

export default Header;
