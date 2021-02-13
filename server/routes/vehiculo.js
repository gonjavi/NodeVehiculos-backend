const express = require('express');
let app = express();
const Vehiculo = require('../models/vehiculo');

app.get('/vehiculos', (req, res) => {

  Vehiculo.find({})
    .populate('vehiculo', 'linea ') 
    .exec((err, vehiculos) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }
    
      res.json({
        ok: true,
        vehiculos
      });
  
  });
});

app.delete("/vehiculos/:id", (req, res) => {   
  const id = req.params.id;    
  
  Vehiculo.findByIdAndRemove(id, (err, carro) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!carro) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      message: ' Vehiculo borrado'
    });
  });
});

app.post('/vehiculos',function(req, res){
  let vehiculo= new Vehiculo({
    "linea":req.body.linea,
    "marca":req.body.marca,
    "modelo":req.body.modelo,
    "color":req.body.color,
    "foto":req.body.Foto,
  });
  vehiculo.save((err, vehiculoDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
      vehiculo: vehiculoDB
    });
  });
});

app.put('/vehiculos/:id', function(req,res){
  const id = req.params.id;  
  let vehiculo={
  "linea":req.body.linea,
  "marca":req.body.marca,
  "modelo":req.body.modelo,
  "color":req.body.color,
  "foto":req.body.Foto,
  }
  
  Vehiculo.findByIdAndUpdate(id, vehiculo,  { new: true }, (err, vehiculoDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!vehiculoDB) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      vehiculo: vehiculoDB
    });
  });
  
});

module.exports = app;