const express = require('express');
const router = express.Router();
const IdeaController = require('../controllers/ideaController');
const FileUpload = require('../middlewares/fileUpload');
const SendEmail = require('../middlewares/sendEmail');
const AuthJwt = require('../middlewares/authJwt');
const cmtController = require('../controllers/commentController');

router.get('/detail/:slug', [AuthJwt.checkLogin], IdeaController.detail);
router.get('/storedIdeas', [AuthJwt.checkLogin], IdeaController.storedIdeas);
router.get('/create', [AuthJwt.checkLogin], IdeaController.create);
router.post(
  '/store',
  [AuthJwt.checkLogin, FileUpload.single('file'), SendEmail.send],
  IdeaController.store,
);
router.get('/:id/update', [AuthJwt.checkLogin], IdeaController.update);
router.put('/:id', [AuthJwt.checkLogin], IdeaController.updateIdea);
router.delete('/:id', [AuthJwt.checkLogin], IdeaController.deleteIdea);
router.delete(
  '/:id/force',
  [AuthJwt.checkLogin],
  IdeaController.forceDeleteIdea,
);
router.post('/:id/comment',cmtController.create);
router.get('/listTask', IdeaController.listTask);

module.exports = router;
