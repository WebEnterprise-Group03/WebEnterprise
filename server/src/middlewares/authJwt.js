const Account = require('../models/accountModel');
const jwt = require('jsonwebtoken');
const KEY = process.env.key;

class authJwt {
  checkLogin(req, res, next) {
    try {
      let token = req.cookies.token;
      let id = jwt.verify(token, KEY);
      Account.findOne({
        _id: id,
      })
        .then((data) => {
          if (data) {
            req.data = data;
            next();
          } else {
            res.json('Not Permission');
          }
        })
        .catch((err) => {});
    } catch (error) {
      
      res.redirect('back')
    }
  }

  checkCurrentUser(req, res, next) {
    let token = req.cookies.token;
    if (token) {
      jwt.verify(token, KEY, async (err, decodedToken) => {
        if (err) {
          res.locals.account = null;
          next();
        } else {
          let account = await Account.findById(decodedToken.id);
          res.locals.account = account;
          next();
        }
      });
    } else {
      res.locals.account = null;
      next();
    }
  }
}

module.exports = new authJwt();
