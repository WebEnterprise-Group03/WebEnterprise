const express = require('express');
const cmtController = require('../controllers/commentController.js');
const router = express.Router();

router.post('/idea/:id/comment', cmtController.create);
module.exports = router;
