import React from 'react';
import logo_MADE_w from '../../assets/images/logo/logo MA-DE darkmode.png';
import './Header.sass';

const Header = () => {
    return (
        <header className="header__container">
            <a href="https://delahoche-emmanuel.fr" >
            <img
                className="logo__made"
                src={logo_MADE_w}
                alt="Logo portfolio"
            />
            </a>
            <nav className="header__NavLink">
                <a href="#Real" className="Real">
                    Réalisations
                </a>
                <a href="#Contact" className="Contact">
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Header;
