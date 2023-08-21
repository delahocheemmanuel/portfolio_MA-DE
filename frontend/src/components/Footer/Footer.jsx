import React from 'react';
import './Footer.sass'; // Importe les styles spécifiques au footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importe le composant FontAwesomeIcon pour les icônes
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Importe les icônes de LinkedIn, GitHub et Twitter

const Footer = () => {
  return (
    <footer>
      <div className="footer"> {/* Conteneur principal du footer */}
        <div className="footer__links"> {/* Conteneur pour les liens de réseaux sociaux */}
          <a
            href="https://www.linkedin.com/in/emmanuel-delahoche-4791a0117" // Lien vers le profil LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link" // Classe pour le style du lien
          >
            <FontAwesomeIcon icon={faLinkedin} /> {/* Affiche l'icône LinkedIn */}
            
          </a>
          <a
            href="https://github.com/delahocheemmanuel" // Lien vers le profil GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link" // Classe pour le style du lien
          >
            <FontAwesomeIcon icon={faGithub} /> {/* Affiche l'icône GitHub */}
            
          </a>
          <a
            href="https://twitter.com/DelahocheManu" // Lien vers le profil Twitter
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link" // Classe pour le style du lien
          >
            <FontAwesomeIcon icon={faTwitter} /> {/* Affiche l'icône Twitter */}
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporte le composant Footer pour une utilisation ailleurs dans l'application
