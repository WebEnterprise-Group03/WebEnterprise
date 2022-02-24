const account = require('../routes/accountRouter');

function route(app){
  app.use('/', account);
}

module.exports = route;