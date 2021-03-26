const express = require('express');
let app = express();
const cors = require('cors');
app.use(cors());
let Vehiculo = require('../models/vehiculo');

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

app.delete('/vehiculo/:id', (req, res) => {   
  const id = req.params.id;
  Vehiculo.findByIdAndDelete(id, (err, carroDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!carroDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'The vehicle does not exist'
        }
      });
    }

    res.json({
      ok: true,
      message: 'The vehicle was delete - Vehiculo borrado'
    });
  });
});

app.post('/vehiculos', (req, res) => {
  let body = req.body;

  let vehiculo= new Vehiculo({
    linea: body.linea,
    marca: req.body.marca,
    modelo: req.body.modelo,
    color: req.body.color,
    foto: req.body.foto,
  });
  vehiculo.save((err, vehiculoDB) => {
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

app.put('/vehiculo/:id', function(req,res){
  const id = req.params.id; 

  let vehiculo={
    linea: req.body.linea,
    marca: req.body.marca,
    modelo: req.body.modelo,
    color: req.body.color,
    foto: req.body.foto,
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