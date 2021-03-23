const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let vehiculoSchema = new Schema({
  linea: { type: String, required: true },
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  color: { type: String, required: true },
  foto: { type: String, required: true }
});

module.exports = mongoose.model('Vehiculo', vehiculoSchema);
