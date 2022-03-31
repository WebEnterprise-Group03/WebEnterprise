const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();
const AuthJwt = require('../middlewares/authJwt');

router.get('/create', [AuthJwt.checkLogin], categoryController.create);
router.post('/store', [AuthJwt.checkLogin], categoryController.store);
router.get('/view', [AuthJwt.checkLogin], categoryController.show);
router.delete('/:id', [AuthJwt.checkLogin], categoryController.delete);

module.exports = router;
