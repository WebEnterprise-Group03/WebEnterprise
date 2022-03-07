const Category = require('../models/ideaCategoryModel');

class categoryController {
  // [Get] /category/create
  create(req,res, next){
    res.render('category/create')
  }
  // [Post] /category/store
  store(req, res, next) {
    const formData = req.body;
    const category = new Category(formData);
    category
      .save()
      .then(() => {
        res.send('add succesfull');
      })
      .catch((error) => {
        res.send('Failed saved');
      });
  }

  show(req,res,next){
   Category.find({})
   .then(categories=> {categories=categories.map(category => category.toObject())
   res.render('category/view',{categories})
   }).catch(next);
  }
}
module.exports = new categoryController();
