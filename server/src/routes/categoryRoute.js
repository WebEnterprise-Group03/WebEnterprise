const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();



router.get('/create', categoryController.create)
router.post('/store', categoryController.store)
router.get('/view', categoryController.show)


module.exports = router;