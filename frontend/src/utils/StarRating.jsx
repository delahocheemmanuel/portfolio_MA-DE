import React from 'react';

const StarRating = ({ score }) => {
    const fullStars = Math.floor(score);
    const halfStar = score - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={i} className="star full-star">★</span>);
    }

    if (halfStar) {
        stars.push(<span key="half" className="star half-star">★</span>);
    }

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;
