const Account = require('../models/accountModel');
const jwt = require('jsonwebtoken');
const {verify} = require("jsonwebtoken");
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
      res.redirect('back');
    }
  }

  checkCurrentUser(req, res, next) {
    try{
      let token = req.cookies.token;
      let id = jwt.verify(token, KEY);
      Account.findOne({
        _id: id,
      })
        .then((data) =>{
          res.locals.data = data;
          next();
        })
        .catch(() =>{
          res.locals.data = null;
          next();
        })
    }catch (e){
    }
  }
}

module.exports = new authJwt();
