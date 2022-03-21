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
 

  }
  module.exports = new cmtController();

