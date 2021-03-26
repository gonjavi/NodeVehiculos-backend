require('./server/config/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.urlencoded({ limit: '1mb', extended: true }));
app.use(express.json({ limit: '1mb' }));

app.use(require('./server/routes/vehiculo'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
     next();
});

mongoose.connect(process.env.URLDB, 
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }, 
    (err, res) => {
    if (err) throw err;
      console.log('Base de datos en linea'); 
  });
  
  app.listen(process.env.PORT, () => console.log("Escuchando puerto", process.env.PORT));
