const express = require('express');
const cmtController = require('../controllers/commentController.js');
const AuthJwt = require('../middlewares/authJwt');
const router = express.Router();

router.post('/doComment',[AuthJwt.checkLogin, AuthJwt.checkCurrentUser], cmtController.doComment);
// router.get('/getComment',[AuthJwt.checkLogin, AuthJwt.checkCurrentUser], cmtController.getComment);

module.exports = router;
