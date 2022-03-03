const express = require('express');
const router = express.Router();
const IdeaController = require('../controllers/ideaController');
const Upload = require('../middlewares/upload');

router.get('/detail/:slug', IdeaController.detail);
router.get('/create', IdeaController.create);
router.post('/store', IdeaController.store);
router.get('/:id/update', IdeaController.update);
router.put('/:id', IdeaController.updateIdea);
router.delete('/:id', IdeaController.deleteIdea);
router.post('/uploads', Upload.single('image'), IdeaController.uploadFiles);
router.delete('/:id/force', IdeaController.forceDeleteCourse);

module.exports = router;
