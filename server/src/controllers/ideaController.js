const Idea = require('../models/ideaModel');

class ideaController{
  //[GET] /idea/detail/
  detail(req, res, next){
    Idea.findOne({})
  }

  //[GET] /idea/create
  create(req, res, next){
    res.render('idea/create');
  }

  //[POST] /idea/store
  store(req, res, next){
    const formData = req.body;
    const idea = new Idea(formData);
    idea
      .save()
      .then(() =>{
          res.redirect('/main/show');
        })
      .catch((error) =>{
        res.send('Failed saved');
    });
  }

  //[GET] /idea/:id/update
  update(req,res,next){
    res.render('idea/update');
  }

  //[PUT] /idea/:id
  updateIdea(req, res, next){

  }

  //[DELETE] /idea/:id/forceDeleteIdea
  forceDeleteCourse(req, res, next){

  }
}

module.exports = new ideaController();