var express = require('express');
var router = express.Router();
var Agent = require("../models/agent").Agent
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с agents');
});

router.get('/:nick', function(req, res, next) {
  async.parallel([
          function(callback){
            Agent.findOne({nick:req.params.nick}, callback)
          },
          function(callback){
            Agent.find({},{_id:0,title:1,nick:1},callback)
          }
      ],
      function(err,result){
          if(err) return next(err)
          var agent = result[0]
          var agents = result[1] || []
          if(!agent) return next(new Error("beda"))
          res.render('agent', {
              title: agent.title,
              picture: agent.avatar,
              desc: agent.desc,
              menu: agents
          });
      })
})


module.exports = router