const Comment = require('../models/cmtModel.js'); 

class cmtController {

    create(req, res, next) {
    const comment = new Comment({
      content: req.body.content,
      author: req.body.author
    });
    
    comment
      .save()
      .then(() => {
        res.redirect("/")
      })
      .catch((error) => {
        res.send('Fail');
      });
  }
 

  }
  module.exports = new cmtController();

