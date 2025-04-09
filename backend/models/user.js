// User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: String,
  user_name: String,
  email: String,
  password: String,
  age: Number,
  mobile_no: String,
  weight: Number,
  gender: String,
  blood_group: String,
  address: String,
  health_condition: String
});

module.exports = mongoose.model('User', userSchema);
