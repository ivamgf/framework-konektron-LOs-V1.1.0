var express = require('express');
var router = express.Router();

var project = require('../public/javascripts/utils').project;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', project);
});

/* GET documentation page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});

/* GET documentation page. */
router.get('/doc', function(req, res, next) {
  res.render('documentation');
});

module.exports = router;
