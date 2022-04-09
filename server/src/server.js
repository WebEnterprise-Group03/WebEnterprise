const express = require('express');
const { create } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');
const Handlebars = require('handlebars');
const methodOverride = require('method-override');
require('dotenv').config();

const app = express();

const PORT = process.env.port || 5000;
const route = require('./routes');
const db = require('./config');

const hbs = create({
  extname: '.hbs',
  defaultLayout: 'main',
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  helpers: {
    sum: (a, b) => a + b,
    ifCond: (v1, opr, v2, opt) => {
      switch (opr) {
        case '===':
          if (v1 === v2) return opt.fn(this);
          break;

        case '!==':
          if (v1 !== v2) return opt.fn(this);
          break;
      }
    },
    times: (n) =>{

    },
  },
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(cookieParser());

app.use(methodOverride('_Method'));

app.use(express.static(path.join(__dirname, 'publics')));

morgan('tiny');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

db.connect();
route(app);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
