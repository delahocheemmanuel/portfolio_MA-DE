import React from 'react';

// Composant fonctionnel StarRating qui prend un score en prop
const StarRating = ({ score }) => {
    // Calcul du nombre d'étoiles pleines et d'une étoile demi en fonction du score
    const fullStars = Math.floor(score);
    const halfStar = score - fullStars >= 0.5;

    // Tableau pour stocker les éléments étoiles
    const stars = [];

    // Boucle pour créer les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={i} className="star full-star">★</span>);
    }

    // Ajout d'une étoile demi si nécessaire
    if (halfStar) {
        stars.push(<span key="half" className="star half-star">★</span>);
    }

    // Rendu du composant avec les étoiles générées
    return <div className="star-rating">{stars}</div>;
};

export default StarRating;

