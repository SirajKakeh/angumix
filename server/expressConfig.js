var express = require('express'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  passport = require('passport'),
  session = require('express-session'),
  path = require('path');

var rootPath = path.normalize(__dirname + '/../');

module.exports = function (app) {
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: 'multi vision unicorns',
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(rootPath + '/dist/dev'));
  app.use('/vendor', express.static(rootPath + '/public/vendor'));
  app.use('/favicon.ico', express.static(rootPath + '/public//favicon.ico'));
  app.use('/styles.css', express.static(rootPath + '/public/styles.css'));

  var ignoredPaths = ['/vendor', '/css', '/js', '/views', '/api', '/styles', '/favicon.ico'];

  // app.all('/*', function (req, res, next) {
  //   //Redirecting to index only the requests that do not start with ignored paths
  //   if (!startsWith(req.url, ignoredPaths))
  //     res.sendFile('index.html', { root: rootPath + '/dist/dev' });
  //   else
  //     next();
  // });

  // function startsWith(string, array) {
  //   for (i = 0; i < array.length; i++)
  //     if (string.startsWith(array[i]))
  //       return true;
  //   return false;
  // }
}