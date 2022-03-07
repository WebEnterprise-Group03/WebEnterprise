const main = require('./mainRoute');
const site = require('./siteRoute');
const auth = require('./authRoute');
const idea = require('./ideaRoute');
const category = require('./categoryRoute.js');

function route(app) {
  app.use('/auth', auth);
  app.use('/main', main);
  app.use('/idea', idea);
  app.use('/category',category);
  app.use('/', site);
}

module.exports = route;
