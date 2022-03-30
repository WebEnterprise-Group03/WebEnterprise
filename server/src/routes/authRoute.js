const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const VerifySignUp = require('../middlewares/verifySignUp');

router.get('/registerPage', AuthController.registerPage);
router.post('/register', AuthController.register);
router.get('/loginPage', AuthController.loginPage);
router.post('/login', AuthController.login);
router.get('/listAccount', AuthController.listAccount);
router.get('/:id/updateAccount', AuthController.updateAccount);
router.put('/:id', AuthController.update);
router.delete('/:id', AuthController.deleteAccount);
router.get('/logout', AuthController.logout);
module.exports = router;
