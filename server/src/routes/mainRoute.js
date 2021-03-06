const express = require('express');
const router = express.Router();
const AuthJwt = require('../middlewares/authJwt');
const VerifySignUp = require('../middlewares/verifySignUp');
const MainController = require('../controllers/mainController');

// router.get('/show', [AuthJwt.checkLogin, AuthJwt.checkCurrentUser], MainController.show);
router.get('/show', [AuthJwt.checkLogin, AuthJwt.checkCurrentUser], MainController.show,);

router.get(
  '/profile',
  [AuthJwt.checkLogin, AuthJwt.checkCurrentUser],
  MainController.profile,
);

module.exports = router;
