// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const {
  addCategory,
  getCategories,
  getCategoryById,

} = require('../controller/category');
let { upload } = require("../config/cloudinary")

router.post('/category', upload.array("image"), addCategory);
router.get('/category', getCategories);
router.get('/category/:id', getCategoryById);

module.exports = router;
