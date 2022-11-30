var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с agents');
});

router.get("/:nick", function(req, res, next) {
  res.send(req.params.nick);
});

router.get('/:nick', function(req, res, next) {
  Cat.findOne({nick:req.params.nick}, function(err,agent){
      if(err) return next(err)
      if(!agent) return next(new Error("Нет такой продукции в нашем агентстве"))
      res.render('cat', {
          title: agent.title,
          picture: agent.avatar,
          desc: agent.desc
      })
  })
})


module.exports = router;
