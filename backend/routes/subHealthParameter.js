const express = require('express');
const router = express.Router();

const { addSubHealthParameter,
    getSubHealthParameter,
    getSubHealthParameteryById, deleteSubhealthParameter } = require('../controller/subHealthParameter');


router.post('/subhealthparameter', addSubHealthParameter);
router.get('/subhealthparameter', getSubHealthParameter);
router.get('/subhealthparameter/:id', getSubHealthParameteryById);
router.delete('/subhealthparameter/:id', deleteSubhealthParameter);



module.exports = router;
