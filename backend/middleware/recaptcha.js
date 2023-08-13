// middleware/recaptcha.js
const axios = require('axios');

const RECAPTCHA_SECRET_KEY = 'RECAPTCHA_PUBLIC_KEY';

module.exports = async function verifyRecaptcha(req, res, next) {
  const recaptchaToken = req.body.recaptchaToken;

  try {
    const recaptchaResponse = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      },
    });

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ error: 'Vérification reCAPTCHA échouée.' });
    }

    next();
  } catch (error) {
    console.error('Erreur lors de la vérification reCAPTCHA :', error);
    return res.status(500).json({ error: 'Une erreur est survenue lors de la vérification reCAPTCHA.' });
  }
};
