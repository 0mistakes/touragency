var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Agenc = mongoose.model('Agenc', { name: String })

var names = new Agenc({ name: 'Standart' })
names.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Go travel')
    }
})  