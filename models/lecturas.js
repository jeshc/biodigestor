var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LecturaSchema =  Schema({
  fecha : {type: Date, default: Date.now },
  mezcla : Number,
  ambiente : Number,
  presion : Number,
  ph : Number,
  gas : Boolean,
  nivel : Number
});

module.exports = mongoose.model( 'Lectura' , LecturaSchema ) ;
