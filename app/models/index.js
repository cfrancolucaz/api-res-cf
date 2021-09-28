const Sequelize = require("sequelize");

//DB Heroku
const sequelize = new Sequelize({
  database: "dbubhpaaftc95t",
  username: "pqqqdygtzrgwgy",
  password: "63a4bcbc89a13912d011e8945520cc87f309a4a20c9c100b39778921950718e8",
  host: "ec2-34-194-123-31.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  }
});


/*
//DB Local
const sequelize = new Sequelize({
  database: "cfrancoDB",
  username: "postgres",
  password: "1234",
  host: "localhost",
  port: 5432,
  dialect: "postgres",

  pool: {
    max:10,
        min:0,
        acquire:30000,
        idle:10000
  }
});
*/



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuarios = require("./usuarios.model.js")(sequelize, Sequelize);
db.regiones = require("./regiones.model.js")(sequelize, Sequelize);
db.departamentos = require("./departamentos.model.js")(sequelize, Sequelize);
db.municipios = require("./municipios.model.js")(sequelize, Sequelize);
db.comercios = require("./comercios.model.js")(sequelize, Sequelize);
db.sucursales = require("./sucursales.model.js")(sequelize, Sequelize);
db.quejas = require("./quejas.model.js")(sequelize, Sequelize);

module.exports = db;