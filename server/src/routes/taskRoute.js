const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get('/listTask', TaskController.listTask);
router.get('/setDeadlineIdea', TaskController.setDeadlineIdea);
router.get('/setDeadlineCmt', TaskController.setDeadlineCmt);
router.get('/createTask', TaskController.createTask);
router.post('/storeTask', TaskController.storeTask);
router.get('/:id/updateTask', TaskController.updateTask);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.deleteTask);
router.delete('/:id/force', TaskController.forceDeleteTask);
router.get('/trashTask', TaskController.trashTask);
router.patch('/:id/restoreTask', TaskController.restoreTask);

module.exports = router;
