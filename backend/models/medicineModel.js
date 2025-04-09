const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: [String], // Array of image URLs
  recommendedDiseases: [String], // Array of disease names
}, { timestamps: true });

module.exports = mongoose.model('Medicine', medicineSchema);
