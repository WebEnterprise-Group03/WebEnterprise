const Account = require('../models/accountModels');

class accountController {
  index(req, res) {
    res.json('Home');
  }

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
        res.status(500).json('Ban tao tk thao bai');
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
          res.json('Dang nhap thanh cong');
        } else {
          return res.json('Thap bai');
        }
      })
      .catch((err) => {
        res.status(500).json('Loi server', err);
      });
  }
}

module.exports = new accountController();
