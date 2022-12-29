const express = require('express');
const router = express.Router();
const asetController = require('../controller/aset.controller');

//TODO 
// ADD JWT
router.get('/', asetController.getTotalAsetByID);
router.post('/', asetController.addAsset);
router.put('/:id', asetController.editAsset);
router.delete('/:id', asetController.deleteAsset);

module.exports = router;
