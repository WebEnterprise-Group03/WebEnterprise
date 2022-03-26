const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get('/listTask', TaskController.listTask);
router.get('/detailTask/:slug', TaskController.detailTask);
router.get('/createTask', TaskController.createTask);
router.post('/storeTask', TaskController.storeTask);
router.delete('/:id', TaskController.deleteTask);
router.delete('/:id/force', TaskController.forceDeleteTask);
router.get('/trashTask', TaskController.trashTask);
router.patch('/restoreTask', TaskController.restoreTask);

module.exports = router;
