const Comment = require('../models/cmtModel.js');
const Idea = require('../models/ideaModel');
const Account = require('../models/accountModel');

class cmtController {
  create(req, res, next) {

    const comment = new Comment(req.body);
    comment
      .save()
      .then(() => Idea.findById(req.params.id))
      .then((idea) => {
        idea.comments.unshift(comment);
        return idea.save();
      })
      .then(() => res.redirect('back'))
      .catch((error) => {
        res.send('Fail');
      });
  }
}
module.exports = new cmtController();
