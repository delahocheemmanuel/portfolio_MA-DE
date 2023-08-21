const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 5 minutes
    max: 10, // 50 requests per windowMs
    message: 'Vous avez atteint la limite de requêtes. Réessayez plus tard.', // Votre message d'erreur personnalisé
  });
  
  module.exports = limiter;