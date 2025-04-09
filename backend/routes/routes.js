// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
} = require('../controller/user');

// Get all users
router.get('/user', getUsers);


// Get one user by ID
router.get('/user/:id', getUserById); 

// Add new user
router.post('/user', addUser);

// Update user by ID
router.put('/user/:id', updateUser);

// Delete user by ID
router.delete('/user/:id', deleteUser);

module.exports = router;
