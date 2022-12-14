var express = require('express');
var router = express.Router();
var Agent = require("../models/agent").Agent

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});

/* Страница машин */
router.get('/:nick', function(req, res, next) {
    Agent.findOne({nick:req.params.nick}, function(err,agent){
        if(err) return next(err)
        if(!agent) return next(new Error("beda"))
        res.render('agent', {
            title: agent.title,
            picture: agent.avatar,
            desc: agent.desc
        })
    })
})


module.exports = router;