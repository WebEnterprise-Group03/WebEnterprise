const express = require('express');
const router = express.Router();
const SiteController = require('../controllers/siteController');
const AuthJwt = require('../middlewares/authJwt');

router.get('/forTeam', SiteController.forTeam);
router.get('/about', SiteController.about);
// router.get('*', AuthJwt.checkCurrentUser,SiteController.forTeam);
router.get('/',SiteController.index);

module.exports = router;
