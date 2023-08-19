const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 5, // 50 requests per windowMs
    message: 'Vous avez atteint la limite de requêtes. Réessayez plus tard.', // Votre message d'erreur personnalisé
  });
  
  module.exports = limiter;