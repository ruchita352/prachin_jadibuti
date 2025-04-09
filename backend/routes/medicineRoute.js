const express = require('express');
const router = express.Router();
const medicineController = require('../controller/medicine');

router.post('/medicine', medicineController.addMedicine);
router.get('/medicine', medicineController.getAllMedicines);
router.get('/medicine/:id', medicineController.getMedicineById);
router.put('/medicine/:id', medicineController.updateMedicine);
router.delete('/medicine/:id', medicineController.deleteMedicine);

module.exports = router;
