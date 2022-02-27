const Account = require('../models/accountModel');
const jwt = require('jsonwebtoken');

class authJwt {
  checkLogin(req, res, next) {
    try {
      let token = req.cookies.token;
      let id = jwt.verify(token, 'mk');
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
      res.status(500).json('Token khong hop le');
    }
  }
}

module.exports = new authJwt();
