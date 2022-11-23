var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + " shouted 'Go travel' ")

}

var Agenc = mongoose.model('Agenc', schema)

var jdm = new Agenc({ name: 'Standart' })
jdm.save(function (err) {
    jdm.meow()
})
