// Routing Modules - index

// Imports

// Imports Modules

// Imports components

// Variables
var express = require('express');
var router = express.Router();
var model = require('../models/AppModel').model;

// Constant

// Functions - Routes
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', model);
});

/* GET documentation page. */
router.get('/doc', function(req, res, next) {
  res.render('documentation', model);
});

/* GET metadataDC page. */
router.get('/metadatadc', function(req, res, next) {
  res.render('metadataDC', model);
});

/* GET metadataLOM page. */
router.get('/metadatalom', function(req, res, next) {
  res.render('metadataLOM', model);
});

// Exports
module.exports = router;
