// entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/vehiculo';
} else {
  urlDB = process.env.MONGO_URI; //MONGO_URI es creada en heroku y el valor es asignado
}

process.env.URLDB = urlDB;


// puerto
process.env.PORT = process.env.PORT || 3000;

