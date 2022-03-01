const Account = require('../models/accountModel');
const jwt = require('jsonwebtoken');

class verifySignUp {
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
