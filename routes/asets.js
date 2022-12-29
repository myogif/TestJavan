const express = require('express');
const router = express.Router();
const asetController = require('../controller/aset.controller');

//TODO 
// ADD JWT
router.get('/:id', asetController.getTotalAsetByID);
router.post('/', asetController.addAsset);
router.post('/byuser', asetController.addUserByFamily);
router.put('/:id', asetController.editAsset);
router.delete('/byuser', asetController.deleteUserByFamily);
router.delete('/:id', asetController.deleteAsset);

module.exports = router;
