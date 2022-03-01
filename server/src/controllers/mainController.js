const Account = require('../models/accountModel');
const Idea = require('../models/ideaModel');

class mainController {
  //[GET] /main/show
  show(req, res, next) {
    Idea.find({})
      .then((ideas) => {
        res.render('main/show', {
          ideas: ideas,
        });
      })
      .catch(next);
  }
}

module.exports = new mainController();
