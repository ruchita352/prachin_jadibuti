// categoryController.js
const Category = require('../models/category');

// Add new category
const addCategory = async (req, res) => {
  try {
    const { category_name } = req.body;
    console.log(req.files)
    let image = req.files.map((file)=> file.path )

    const newCategory = new Category({
      category_name,
      image
    });

    await newCategory.save();
    res.status(201).json({ message: 'Category added', category: newCategory });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add category' });
  console.log(err)
  }
};

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get categories' });
  }
};

// Get single category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch category' });
  }
};






module.exports = {
  addCategory,
  getCategories,
  getCategoryById,

};
