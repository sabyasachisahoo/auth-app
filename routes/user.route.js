const express = require('express');
var router = express.Router();
//set the contoller exports
const userController = require('../controllers/user.controller');

router.get('/all', userController.getAllUsers);

router.get('/:id',userController.getUserById);

router.post('/create', userController.createUser);

router.put('/update/:id',userController.updateUser)

router.delete('/delete/:id',userController.deleteUser)

module.exports = router;