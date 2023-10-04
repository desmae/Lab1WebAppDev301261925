// index.js Nick Kaplan 301261925 2023-10-04

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', {page: 'Home', menuId: 'home' });
});

module.exports = router;
