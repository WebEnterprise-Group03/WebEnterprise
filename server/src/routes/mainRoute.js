const express = require('express');
const router = express.Router();
const AuthJwt = require('../middlewares/authJwt');
const MainController = require('../controllers/mainController');

router.get('/show', AuthJwt.checkLogin, MainController.show);

module.exports = router;
