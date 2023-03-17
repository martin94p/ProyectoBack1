const express = require('express');
const mysql=require('mysql2');
const cors = require('cors');

const dotEnv = require('dotenv');
const port = 3000;
const bodyParser= require('body-parser'); 
const app = express();
const routes = require('/routes/routes');

dotEnv.config()

app.use(bodyParser.json());

app.use(cors());
app.use("/routes/routes.js",routes)

// mYSQL
const connection = mysql.createConnection({
host: 'localhost',
user:'root',
password:'',
database: 'vortexinventary',
port:3306,
}
);

app.get('/', (req, res) => {
    res.send('Welcome to my API!');

})


connection.connect(error=> {
if (error) throw error;
console.log('Database server is running!')
});

app.listen(port, ()=> {console.log(`SERVER CORRIENDO EN PUERTO${port}`)
}
);

module.exports=app;