import React from 'react';

import logo_MADE from '../../assets/images/logo/logo MA-DE.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <img className="logo__made" src={logo_MADE} alt="LOGO" />
            <nav className="header__NavLink">
                <a href="#About" className="About">
                    A propos
                </a>
                <a href="#Contact" className="Contact">
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Header;
