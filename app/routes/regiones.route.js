module.exports = app => {
    const regiones = require("../controllers/regiones.controller.js");
  
    var router = require("express").Router();
      
    router.post("/", regiones.create);  
    router.get("/", regiones.findAll);
    router.get("/:id", regiones.findOne);
    router.put("/:id", regiones.update);
    router.delete("/:id", regiones.delete);
  
    app.use("/api/regiones", router);
  };