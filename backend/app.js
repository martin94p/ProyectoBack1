const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotEnv = require('dotenv');
const path = require('path');
dotEnv.config();

// import de routes
var indexRouter = require('./routes/index');

// Variables & App
const app = express();
const PORT = process.env.API_PORT || 4000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:false}));
//middleware global, pra resolver error cors
app.use(cors());
//middleware global, para recibir body de formato json
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
//end point inicial, con el router

app.use('/', indexRouter);

// Hacer que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Manejar las peticiones GET en la ruta /api
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
});


//escucho puerto
app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}/`);
});

module.exports = app;