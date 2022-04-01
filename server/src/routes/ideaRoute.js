const express = require('express');
const router = express.Router();
const IdeaController = require('../controllers/ideaController');
const FileUpload = require('../middlewares/fileUpload');
const SendEmail = require('../middlewares/sendEmail');
const AuthJwt = require('../middlewares/authJwt');
const cmtController = require('../controllers/commentController');
const Idea = require('../models/ideaModel');

router.get('/detail/:id', [AuthJwt.checkLogin], IdeaController.detail);
router.get('/storedIdeas', [AuthJwt.checkLogin], IdeaController.storedIdeas);
router.get('/create', [AuthJwt.checkLogin], IdeaController.create);
router.post(
  '/store',
  AuthJwt.checkLogin,
  FileUpload.single('file'),
  SendEmail.send,
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
router.post('/:id/comment', cmtController.create);

router.get('/listCategory', IdeaController.listCategory);


//like function
router.put('/detail/:id/like',[AuthJwt.checkLogin], (req,res)=>{
  Idea.findById(req.params.id).then((idea) => {
    idea.like.push(req.data._id);
    idea.save();
    return res.status(200);
 
})
});

//dislike funtion
router.put('/detail/:id/dislike',[AuthJwt.checkLogin],(req,res)=>{

  Idea.findById(req.params.id).
  then((idea) => {
    
    idea.dislike.push(req.data._id);
    idea.save();
    return res.status(200);
})
});



module.exports = router;
