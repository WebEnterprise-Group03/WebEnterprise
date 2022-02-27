const express = require('express');
const router = express.Router();
const AuthJwt = require('../middlewares/authJwt');
const ManageController = require('../controllers/manageController');

router.get('/show', AuthJwt.checkLogin, ManageController.show);

module.exports = router;
