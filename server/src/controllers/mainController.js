const Account = require('../models/accountModel');
const Idea = require('../models/ideaModel');

class mainController {
  //[GET] /main/show
  show(req, res, next) {
    const perPage = 8;
    const page = req.query.p;

    if (req.data) {
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
      // .then((ideas) => {
      //   res.render('main/show', {
      //     ideas: ideas,
      //     check: req.data.role,
      //   });
      // })
      // .catch(next);
    }
  }
}

module.exports = new mainController();
