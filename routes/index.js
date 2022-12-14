var express = require('express')
var router = express.Router()
var Agent = require("../models/agent").Agent




router.get('/', function(req, res, next) {
    Agent.find({},{_id:0,title:1,nick:1},function(err,menu){
      req.session.greeting = "Session started"
        res.render('index', {
          title: 'Touragency',
          counter: req.session.counter
                            });
    })

});

module.exports = router;