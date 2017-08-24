const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');

const controllers = require('./controllers/router');
const helpers = require('./views/helpers/functions');

const app = express();

// SET UP VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
   'hbs',
   exphbs({
      extname: 'hbs',
      layoutsDir: path.join(__dirname, 'views', 'partials/layouts'),
      partialsDir: path.join(__dirname, 'views', 'partials'),
      defaultLayout: 'main',
      helpers: helpers
   }));




app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;
