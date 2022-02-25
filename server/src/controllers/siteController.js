class siteController {
  index(req, res) {
    res.json('Home');
  }
}

module.exports = new siteController();
