const express = require('express');
const bodyParser = require('body-parser');
const cors= require("cors");
const app = express();

var corsOptions = {
    origin: '*'
    ,method: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    ,preflightContinue: false
    ,optionsSuccessStatus:200
};

app.set('port', process.env.PORT || 5000);
app.use (cors(corsOptions));
//app.use(express.urlencoded({extended: false}));
//app.use(express.json());
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario



const db= require('./app/models/index.js');
db.sequelize.sync();
//db.sequelize.sync({force:true});

//Pruebas
app.get("/", (req,res) => {    
    res.json({message:"Bienvenido Seminario UMG API REST CFranco"});
});

app.post("/", (req,res) => {
    res.send(req.body)
});

 

require('./app/routes/usuarios.route.js')(app);
require('./app/routes/regiones.route.js')(app);
require('./app/routes/departamentos.route.js')(app);
require('./app/routes/municipios.route.js')(app);
require('./app/routes/comercios.route.js')(app);
require('./app/routes/sucursales.route.js')(app);
require('./app/routes/quejas.route.js')(app);


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

