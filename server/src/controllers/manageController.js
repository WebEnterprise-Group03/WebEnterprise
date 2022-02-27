const Account = require('../models/accountModels');

class manageController{
  show(req,res){
    res.render('manage/show');
    // console.log(req.data);
    // res.json('Hello ca nha')
  }
}

module.exports = new manageController();