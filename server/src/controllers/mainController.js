const Account = require('../models/accountModel');
const Idea = require('../models/ideaModel');

class mainController {
  //[GET] /main/show
  show(req, res, next) {
    const perPage = 8;
    const page = req.query.p;
    const data = req.data;

    if (data) {
      Idea.find({})
        .skip(perPage * page - perPage)
        .limit(perPage)
        .lean()
        .exec(function (err, ideas) {
          Idea.countDocuments().exec(function (err, count) {
            res.render('main/show', {
              pagination: {
                page: req.query.p || 1,
                pageCount: Math.ceil(count / perPage),
              },
              ideas: ideas,
              check: req.data.role,
            });
          });
        });
    }
  }

  profile(req,res,next){
  }
}

module.exports = new mainController();
