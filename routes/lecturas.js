var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Lectura = require('../models/lecturas');

/* GET lecturas listing. */
router.get('/', function(req, res, next) {
  Lectura.find({}, function(err, datos) {
    res.status(200).json(datos);
  });
});

// Nueva lectura
router.post('/', function(req, res, next) {
  console.log('gas',req.body.gas);
  var lectura = Lectura({
    mezcla : req.body.mezcla,
    ambiente : req.body.ambiente,
    presion : req.body.presion,
    ph : req.body.ph,
    gas : req.body.gas,
    nivel : req.body.nivel
  });
  //res.send(usuario);


  lectura.save(function(err, data) {
    if (err) {
      res.status(404).json({
        mensaje: "Error al guardar"
      });
    } else {
      res.status(201).json(data);
    }
  });

});


module.exports = router;
