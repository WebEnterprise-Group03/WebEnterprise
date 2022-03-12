const express = require('express');
const router = express.Router();
const IdeaController = require('../controllers/ideaController');
const Upload = require('../middlewares/upload');
const AuthJwt = require('../middlewares/authJwt');

router.get('/detail/:slug', [AuthJwt.checkLogin],IdeaController.detail);
router.get('/storedIdeas', [AuthJwt.checkLogin],IdeaController.storedIdeas);
router.get('/create',[AuthJwt.checkLogin], IdeaController.create);
router.post('/store', [AuthJwt.checkLogin, Upload.single('file')], IdeaController.store);
router.get('/:id/update', [AuthJwt.checkLogin],IdeaController.update);
router.put('/:id',[AuthJwt.checkLogin], IdeaController.updateIdea);
router.delete('/:id',[AuthJwt.checkLogin], IdeaController.deleteIdea);
router.delete('/:id/force',[AuthJwt.checkLogin], IdeaController.forceDeleteCourse);

module.exports = router;
