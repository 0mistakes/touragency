var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Standart agency */
router.get('/standart', function(req, res, next) {
  res.render("agency", {
    title: "standart",
    picture: "images/travel-agency.jpg",
    desc: "Standart agency"
  });
});

/* kartinka agency */
router.get('/kartinka', function(req, res, next) {
    res.render('agency', {
    title: "kartinka",
    picture: "images/photo-kartinka.jpg",
    desc: "kartinka agency"

  });
});

/* globus agency */
router.get('/globus', function(req, res, next) {
  res.render("agency", {
    title: "globus",
    picture: "images/photo-globus.jpg",
    desc: "globus photo"
  });
});

module.exports = router;
