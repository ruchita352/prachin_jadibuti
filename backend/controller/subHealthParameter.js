const SubHealthParameter = require('../models/subHealthParameter');

const addSubHealthParameter = async (req, res) => {
  try {
    const { disease_name, parameter_name, sub_parameter_name } = req.body;

    const newSubHealthParameter = new SubHealthParameter({
      disease_name,
      parameter_name,
      sub_parameter_name
    });

    await newSubHealthParameter.save();
    res.status(201).json({ message: 'added', SubhealthParameter: newSubHealthParameter });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add Sub Health Parameter' });
    console.log(err)
  }
};

// Get all SubHealthParameter
const getSubHealthParameter = async (req, res) => {
  try {
    const AllSubHealthParameters = await SubHealthParameter.find();
    res.json(AllSubHealthParameters);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get Sub Health Parameter' });
  }
};


// Get single Sub HealthParameter by ID
const getSubHealthParameteryById = async (req, res) => {
  try {
    const subHealthParameter = await SubHealthParameter.findById(req.params.id);
    if (!subHealthParameter) return res.status(404).json({ error: 'SubhealthParameter not found' });
    res.json(subHealthParameter);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch SubhealthParameter By Id' });
  }
};

const deleteSubhealthParameter = async (req, res) => {
  try {
    const deleted = await SubHealthParameter.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "SubHealthParameter not found" });
    res.json({ message: "Deleted successfully SubHealthParameter" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




module.exports = {
  addSubHealthParameter,
  getSubHealthParameter,
  getSubHealthParameteryById,
  deleteSubhealthParameter
};