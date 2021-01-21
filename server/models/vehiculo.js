const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let vehiculoSchema = new Schema({
  linea: { type: String, required: [true, 'Se debe incluir la línea'] },
  marca: { type: String, required: [true, 'Se debe incluir la marca'] },
  modelo: { type: String, required: false },
  color: { type: String, required: false },
  foto: { type: Text, required: false }
});

module.exports = mongoose.model('Vehiculo', vehiculoSchema);
