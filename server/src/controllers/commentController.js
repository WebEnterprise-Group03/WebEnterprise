const Comment = require('../models/cmtModel.js'); 

class cmtController {

    create(req, res, next) {
        res.render('cmt/create');
      }

    store(req, res, next) {
    const formData = req.body;
    const comment = new Comment(formData);
    comment
      .save()
      .then(() => {
        res.redirect("back")
      })
      .catch((error) => {
        res.send('Fail');
      });
  }
 // view comment
  show(req, res, next) {
    Comment.find({})
      .then((comments) => {
        comments = comments.map((comment) => comment.toObject());
        res.render('idea/detail', { comments });
      })
      .catch(next);
  }
  }
  module.exports = new cmtController();

