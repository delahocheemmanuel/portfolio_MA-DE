import React, { useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';


const VotreComposant = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Ajoutez ici la logique pour changer le thème de votre application
    // en fonction de la valeur de isDarkMode (true pour le mode sombre, false pour le mode clair).
  };

  return (
    <div className="votre-composant">
      {/* Ajoutez d'autres éléments de votre composant ici */}
      <DarkModeToggle
        onChange={handleDarkModeToggle}
        checked={isDarkMode}
        size={80}
      />
    </div>
  );
};

export default VotreComposant;
