var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test1')
var Agent = require("../models/agent").Agent


var agent = new Agent({
title: "Supra",
nick: "supraa70"
})


console.log(agent)
agent.save(function(err, agent, affected){
console.log(agent.title)
})