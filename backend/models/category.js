// Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true
  },
  image: {
    type: [String] // store image URL or filename
  }
});

module.exports = mongoose.model('Category', categorySchema);
