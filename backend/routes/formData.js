// formData.js
const express = require("express");
const router = express.Router();
const FormDataController = require("../controllers/formData");
const limiter = require("../middleware/rate-limit"); // Middleware pour limiter le nombre de requêtes par IP
const verifyRecaptcha = require("../middleware/recaptcha"); // Importez le middleware


// Route pour enregistrer les données dans la base de données
router.post("/", FormDataController.saveFormData);


module.exports = router;
