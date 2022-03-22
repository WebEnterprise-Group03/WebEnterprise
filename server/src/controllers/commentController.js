const Comment = require('../models/cmtModel.js'); 

class cmtController {

    create(req, res, next) {
        res.render('cmt/create');
      }

    store(req, res, next) {
    const comment = new Comment({
      content: req.body.content,
    });
    comment
      .save()
      .then(() => {
        res.redirect("back")
      })
      .catch((error) => {
        res.send('Fail');
      });
  }
 

  }
  module.exports = new cmtController();

