// formData.js
const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const FormData = mongoose.model("FormData", formDataSchema);

module.exports = FormData;

