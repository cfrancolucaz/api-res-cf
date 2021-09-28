module.exports = app => {
    const sucursales = require("../controllers/sucursales.controller.js");
  
    var router = require("express").Router();
      
    router.post("/", sucursales.create);  
    router.get("/", sucursales.findAll);
    router.get("/:id", sucursales.findOne);
    router.get("/regiones/:id", sucursales.findOneRegion);
    router.get("/departamentos/:id", sucursales.findOneDepartamento);
    router.get("/municipios/:id", sucursales.findOneMunicipio);
    router.get("/comercios/:id", sucursales.findOneComercios);
    router.put("/:id", sucursales.update);
    router.delete("/:id", sucursales.delete);
  
    app.use("/api/sucursales", router);
  };