var express = require('express')
var router = express.Router()
var Agent = require("../models/agent").Agent




router.get('/', function(req, res, next) {
    Agent.find({},{_id:0,title:1,nick:1},function(err,menu){
        res.render('index', {
                                title: 'Express',
                                menu: menu
                            });
    })

});

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.greeting = "Hi!!!"
  res.render('index', { title: 'Express', menu:menu });
});


module.exports = router;