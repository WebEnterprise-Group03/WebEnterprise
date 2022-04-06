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

  // show(req, res, next) {
  //   let perPage = 16;
  //   let page = req.param.pageY || 1;
  //
  //   if (req.data) {
  //     Idea.find({})
  //       .skip(perPage * page - perPage)
  //       .limit(perPage)
  //       .exec((err, ideas) => {
  //         Idea.countDocuments((err, count) => {
  //           if (err) return next(err);
  //           res.render('main/show', {
  //             ideas: ideas,
  //             check: req.data.role,
  //             current: page,
  //             pages: Math.ceil(count / perPage),
  //           });
  //         });
  //         // .then((ideas) => {
  //         //   res.render('main/show', {
  //         //     ideas: ideas,
  //         //     check: req.data.role,
  //         //   });
  //         // })
  //         // .catch(next);
  //       });
  //   }
  // }
}

module.exports = new mainController();
