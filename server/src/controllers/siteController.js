class siteController {
  index(req, res) {
    res.render('Home');
  }
}

module.exports = new siteController();
