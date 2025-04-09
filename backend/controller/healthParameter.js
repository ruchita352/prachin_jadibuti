const HealthParameter = require('../models/healthParameter');

//Add HealthParameter
const addHealthParameter = async (req, res) => {
  try {
    const { disease_name, parameter_name } = req.body;
    const newHealthParameter = new HealthParameter({
      disease_name,
      parameter_name
    });

    await newHealthParameter.save();
    res.status(201).json({ message: 'added', healthParameter: newHealthParameter });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add Health Parameter' });
    console.log(err)
  }
};

// Get all HealthParameter
const getHealthParameter = async (req, res) => {
  try {
    const AllHealthParameters = await HealthParameter.find();
    res.json(AllHealthParameters);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get Health Parameter' });
  }
};


// Get single HealthParameter by ID
const getHealthParameteryById = async (req, res) => {
  try {
    const healthParameter = await HealthParameter.findById(req.params.id);
    if (!healthParameter) return res.status(404).json({ error: 'healthParameter not found' });
    res.json(healthParameter);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch healthParameter' });
  }
};

const deletehealthParameter = async (req, res) => {
  try {
    const deleted = await HealthParameter.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "HealthParameter not found" });
    res.json({ message: "Deleted successfully Health Parameter" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = {
  addHealthParameter,
  getHealthParameter,
  getHealthParameteryById,
  deletehealthParameter
};