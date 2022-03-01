class siteController {
  //[GET] /
  index(req, res) {
    res.render('Home');
  }
}

module.exports = new siteController();
