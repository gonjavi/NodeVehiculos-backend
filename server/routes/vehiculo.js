const express = require('express');
let app = express();
const Vehiculo = require('../models/vehiculo');

/*  enviar carros */
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

/*  borrar carros */
app.delete("/carro/borrar/:id", (req, res) => {   
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

/*  guardar carros sql */
app.post('/carro/nuevo',function(req, res){
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

/*  actualizar carros sql */
app.put('/carro/actualizar/:id',function(req,res){

  const id = req.params.id;  
  let vehiculo={
  "linea":req.body.linea,
  "marca":req.body.marca,
  "modelo":req.body.modelo,
  "color":req.body.color,
  "foto":req.body.Foto,
  }
  
  
});




module.exports = app;