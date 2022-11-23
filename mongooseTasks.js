var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Agenc = require("./models/travel").Agenc

var val = new Agenc({
title: "Standart",
nick: "standart23"
})

console.log(val)
val.save(function(err, val, affected){
console.log(val.title)
})
