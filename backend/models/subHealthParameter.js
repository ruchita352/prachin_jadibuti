const mongoose = require('mongoose');

const subHealthParameterSchema = new mongoose.Schema({
 disease_name:{
    type: String,
    required: true
  },
  parameter_name: {
    type: String, 
    required: true
  },
  sub_parameter_name: {
    type: [String], 
    required: true
  }
});

module.exports = mongoose.model('SubHealthParameter', subHealthParameterSchema);
