class siteController {
  //[GET] /
  index(req, res) {
    res.render('home');
  }

  //[GET] /about
  about(req,res){
    res.render('about');
  }

  //[GET] /forTeam
  forTeam(req,res){
    res.render('forTeam');
  }
}

module.exports = new siteController();
