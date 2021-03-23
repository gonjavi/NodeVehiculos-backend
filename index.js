require('./server/config/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ limit: '1mb' }));
app.use(express.json({ limit: '1mb' }));

app.use(require('./server/routes/vehiculo'));

mongoose.connect(process.env.URLDB, 
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }, 
    (err, res) => {
    if (err) throw err;
      console.log('Base de datos en linea'); 
  });
  
  app.listen(process.env.PORT, () => console.log("Escuchando puerto", process.env.PORT));
