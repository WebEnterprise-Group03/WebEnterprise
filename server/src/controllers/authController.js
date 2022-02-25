const Account = require('../models/accountModels');
const jwt = require('jsonwebtoken');

class authController {
  register(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    Account.findOne({
      username: username,
    })
      .then((data) => {
        if (data) {
          res.json('User nay da ton tai');
        } else {
          return Account.create({
            username: username,
            password: password,
          });
        }
      })
      .then((data) => {
        res.json('Ban da tao tk thanh cong');
      })
      .catch((err) => {
        res.status(500).json('Ban tao tk that bai');
      });
  }

  login(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    Account.findOne({
      username: username,
      password: password,
    })
      .then((data) => {
        if (data) {
          let token = jwt.sign(
            {
              _id: data._id,
            },
            'mk',
          );
          return res.json({
            message: 'Dang nhap thanh cong',
            token: token,
          });
        } else {
          return res.json('Thap bai');
        }
      })
      .catch((err) => {
        res.status(500).json('Loi server', err);
      });
  }

  logout(req,res) {
    res.cookie('jwt','',{maxAge : 1});
    res.json('logout succesfull');
  }
}

module.exports = new authController();
