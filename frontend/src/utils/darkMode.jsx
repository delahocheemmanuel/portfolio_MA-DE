import React, { useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

const VotreComposant = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode'); // Ajoute ou retire la classe 'dark-mode'
  };

  return (
    <DarkModeToggle
      onChange={handleDarkModeToggle}
      checked={isDarkMode}
      size={60}
    />
  );
};

export default VotreComposant;
