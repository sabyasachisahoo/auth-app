const express = require('express');
const passport = require('passport');

var router = express.Router();
//set the contoller exports
const authController = require('../controllers/auth.controller');

router.post('/register', authController.registerUser);

router.post('/login',authController.loginUser);

router.get('/profile',passport.authenticate('jwt',{session:false}),authController.profileInfo);

router.get('/admin',passport.authenticate('jwt',{session:false}),authController.adminInfo)

module.exports = router;