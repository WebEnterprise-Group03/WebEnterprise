const Account = require('../models/accountModel');
const Idea = require('../models/ideaModel');

class mainController {
  //[GET] /main/show
  show(req, res, next) {
    if (req.data) {
      Idea.find({})
        .then((ideas) => {
          res.render('main/show', {
            ideas: ideas,
            check: req.data.role,
          });
        })
        .catch(next);
    }
  }
}

module.exports = new mainController();
