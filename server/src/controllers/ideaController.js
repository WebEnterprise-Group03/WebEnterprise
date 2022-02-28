const Idea = require('../models/ideaModel');

class ideaController{
  //[GET] /idea/detail/
  detail(req, res, next){
    Idea.findOne({})
  }

  //[GET] /idea/create
  create(req, res, next){

  }

  //[POST] /idea/store
  store(req, res, next){

  }

  //[GET] /idea/:id/update
  update(req,res,next){

  }

  //[PUT] /idea/:id
  updateIdea(req, res, next){

  }

  //[DELETE] /idea/:id/forceDeleteIdea
  forceDeleteCourse(req, res, next){

  }
}

module.exports = new ideaController();