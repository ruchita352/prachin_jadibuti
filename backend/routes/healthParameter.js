const express = require('express');
const router = express.Router();

const { getHealthParameter, getHealthParameteryById, addHealthParameter, deletehealthParameter } = require('../controller/healthParameter');


router.post('/healthparameter', addHealthParameter);
router.get('/healthparameter', getHealthParameter);
router.get('/healthparameter/:id', getHealthParameteryById);
router.delete('/healthparameter/:id', deletehealthParameter);



module.exports = router;