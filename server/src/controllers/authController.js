const Account = require('../models/accountModels');
const jwt = require('jsonwebtoken');

class authController {
  registerPage(req,res){
    res.render('auth/register');
  }

  register(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let fullName = req.body.fullName;
    let phone = req.body.phone;
    let email = req.body.email;
    let gender = req.body.gender;
    let role = req.body.role;

    Account.findOne({
      username: username,
    })
      .then((data) => {
        if (data) {
          alert('User nay da ton tai');
          // res.json('User nay da ton tai');
        } else {
          return Account.create({
            username: username,
            password: password,
            fullName: fullName,
            phone: phone,
            email: email,
            gender: gender,
            role: role,
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

  loginPage(req,res){
    res.render('auth/login');
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

  logout(req, res) {
    try{
      // res.clearCookie('jwt');
      res.cookie('jwt', '', { maxAge: 1 });
      // console.log('logout succesfull');
      res.redirect('/');
    }catch (error){
      res.status(500).send(error);
    }
  }
}

module.exports = new authController();
