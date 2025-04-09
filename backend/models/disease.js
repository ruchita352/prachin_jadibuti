// Category.js
const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
 disease_name:{
    type: String,
    required: true
  },
  image: {
    type: [String] // store image URL or filename
  }
});

module.exports = mongoose.model('Disease', diseaseSchema);
