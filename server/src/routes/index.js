const manage = require('./manageRoute');
const site = require('./siteRoute');
const auth = require('./authRoute');

function route(app) {
  app.use('/manage', manage);
  app.use('/auth', auth);
  app.use('/', site);
}

module.exports = route;
