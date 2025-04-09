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
router.get('/get_user', getUsers);


// Get one user by ID
router.get('/get_user/:id', getUserById); 

// Add new user
router.post('/add_user', addUser);

// Update user by ID
router.put('/update_user/:id', updateUser);

// Delete user by ID
router.delete('/delete_user/:id', deleteUser);

module.exports = router;
