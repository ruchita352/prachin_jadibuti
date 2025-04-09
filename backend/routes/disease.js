const express = require('express');
const router = express.Router();

const {disease, getDiseaseyById,getCategories,deleteDisease} =require("../controller/disease");
let { upload } = require("../config/cloudinary");

router.post('/disease', upload.array("image"), disease);
router.get('/disease', getCategories);
router.get('/disease/:id', getDiseaseyById);
router.delete('/disease/:id', deleteDisease);


module.exports = router;