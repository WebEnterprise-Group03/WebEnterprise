const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

router.get('/registerPage', AuthController.registerPage);
router.post('/register', AuthController.register);
router.get('/loginPage', AuthController.loginPage);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
module.exports = router;
