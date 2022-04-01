const main = require('./mainRoute');
const site = require('./siteRoute');
const auth = require('./authRoute');
const idea = require('./ideaRoute');
const comment = require('./cmtRoute');
const category = require('./categoryRoute.js');

const task = require('./taskRoute.js');

function route(app) {
  app.use('/auth', auth);
  app.use('/main', main);
  app.use('/idea', idea);
  app.use('/category', category);
  app.use('/task', task);
  app.use('/', site);
}

module.exports = route;
