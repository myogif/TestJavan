const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

//TODO 
// ADD JWT

router.post('/', userController.addUser);
router.put('/:id', userController.editUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
