const Comment = require('../models/cmtModel.js'); 
const Idea = require('../models/ideaModel')
const User = require('../models/accountModel')
class cmtController {
<<<<<<< Updated upstream

    create(req, res, next) {
   const comment = new Comment(req.body);
   
    comment
      .save()
      .then(() => Idea.findById( req.params.id))
      .then((idea) => {
        idea.comments.unshift(comment);
        return idea.save();
      })
      .then(() => 
      res.redirect('back'))
=======
  async doComment(req, res, next) {
    const { data } = req.data.username;
    const { title } = req.body;
    const formData = {
      content: req.body.content
    }

    const IdeaPost = await Idea.findOne({ title: title})
    const author = await Account.findOne({ username: req.data.username})

    formData.idea = IdeaPost._id;
    formData.author = author._id;
    const cmt = new Comment(formData);
    await cmt
      .save()
      .then(() => res.redirect('back'))
>>>>>>> Stashed changes
      .catch((error) => {
        res.send('Fail');
      });


    // const comment = new Comment(req.body);
    // comment
    //   .save()
    //   .then(() => Idea.findById(req.params.id))
    //   .then((idea) => {
    //     idea.comments.unshift(comment);
    //     return idea.save();
    //   })
    //   .then(() => res.redirect('back'))
    //   .catch((error) => {
    //     res.send('Fail');
    //   });
  }

  async print(req,res,next){

  }
 

  }
  module.exports = new cmtController();

