var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Standart photo */
router.get('/standart', function(req, res, next) {
  res.render("agency", {
    title: "Standart photo",
    picture: "images/travel-agency.png",
    desc: "Standart Baratroom (Podpivas) from DotA 2"
  });
});

/* Fury baratroom */
router.get('/kartinka', function(req, res, next) {
    res.render('agency', {
    title: "kartinka photo",
    picture: "images/photo-kartinka.png",
    desc: "Skin 'Fury' Baratroom (Podpivas) from DotA 2"

  });
});

/* DotA-AllStars baratroom */
router.get('/globus', function(req, res, next) {
  res.render("agency", {
    title: "globus",
    picture: "images/photo-globus.png",
    desc: "globus photo"
  });
});

module.exports = router;
