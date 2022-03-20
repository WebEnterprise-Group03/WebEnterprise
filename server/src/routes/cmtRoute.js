const express = require('express');
const cmtController = require('../controllers/commentController.js');
const router = express.Router();

router.get('/create', cmtController.create);
router.post('/store', cmtController.store);

module.exports = router;