require('./config/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(require('./routes/vehiculo'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


mongoose.connect(process.env.URLDB, 
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, 
    (err, res) => {
    if (err) throw err;
      console.log('Base de datos en linea'); 
  });
  
  app.listen(process.env.PORT, () => console.log("Escuchando puerto", process.env.PORT));
