var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница глобуса */
router.get('/globus', function(req, res, next) {
  res.send("<h1>Страница globus</h1>")
});

/* Страница kartinka*/
router.get('/kartinka', function(req, res, next) {
  res.send("<h1>Страница kartinka</h1>")
});

/* Страница chto-to eshe*/
router.get('/standart', function(req, res, next) {
  res.send("<h1>Страница generic</h1>")
});

module.exports = router;
