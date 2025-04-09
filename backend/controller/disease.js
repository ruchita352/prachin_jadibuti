const Disease = require('../models/disease');

//Add disease
const disease = async (req, res) => {
    try {
        const { disease_name } = req.body;
        let image = req.files.map((file) => file.path)

        const newDisease = new Disease({
            disease_name,
            image
        });

        await newDisease.save();
        res.status(201).json({ message: 'added', disease: newDisease });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add Disease' });
        console.log(err)
    }
};

// Get all disease
const getCategories = async (req, res) => {
  try {
    const diseases = await Disease.find();
    res.json(diseases);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get Diseases' });
  }
};


// Get single disease by ID
const getDiseaseyById = async (req, res) => {
  try {
    const disease = await Disease.findById(req.params.id);
    if (!disease) return res.status(404).json({ error: 'Disease not found' });
    res.json(disease);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch disease' });
  }
};
//Delete Diseses
deleteDisease = async (req, res) => {
  try {
    const deleted = await Disease.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Disease not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
    getCategories,
    disease,
    getDiseaseyById,
    deleteDisease
};