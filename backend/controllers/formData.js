// controllers/formData.js
const FormData = require('../models/formData');

exports.saveFormData = async (req, res) => {
  const { name, email, message } = req.body;

  // Enregistrement des données dans la base de données
  try {
    const formData = new FormData({
      name,
      email,
      message,
    });

    await formData.save();
    res.json({ message: 'Données du formulaire enregistrées avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des données dans la base de données :', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de l\'enregistrement des données.' });
  }
};


