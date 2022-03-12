const Account = require('../models/accountModel');
const jwt = require('jsonwebtoken');

class verifySignUp {
  checkDuplicateUsernameOrEmail(req, res, next) {
    //username
    Account.findOne({
      username: req.body.username,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res
          .status(400)
          .send({ message: 'Failed! Username is already in use!' });
        return;
      }
      //email
      Account.findOne({
        email: req.body.email,
      }).exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if (user) {
          res.status(400).send({ message: 'Failed! Email is already in use!' });
          return;
        }
        next();
      });
    });
  }

  checkRolesExisted(req, res, next) {}

  checkPermission(req, res, next) {
    let role = req.data.role;
    if (
      role === 'staff' ||
      role === 'admin' ||
      role === 'manager' ||
      role === 'coordinator'
    ) {
      next();
    } else {
      res.json('Not Permission');
    }
  }

  checkHighPermission(req, res, next) {
    let role = req.data.role;
    if (role === 'admin') {
      next();
    } else {
      res.json('Not Permission');
    }
  }

  checkMediumPermission(req, res, next) {
    let role = req.data.role;
    if (role === 'admin' || role === 'manager') {
      next();
    } else {
      res.json('Not Permission');
    }
  }

  checkLowPermission(req, res, next) {
    let role = req.data.role;
    if (role === 'admin' || role === 'manager' || role === 'coordinator') {
      next();
    } else {
      res.json('Not Permission');
    }
  }
}

module.exports = new verifySignUp();
