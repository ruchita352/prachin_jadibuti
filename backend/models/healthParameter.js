// Category.js
const mongoose = require('mongoose');

const healthParameterSchema = new mongoose.Schema({
 disease_name:{
    type: String,
    required: true
  },
  parameter_name: {
    type: [String], 
    required: true
  }
});

module.exports = mongoose.model('HealthParameter', healthParameterSchema);
