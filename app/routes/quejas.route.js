module.exports = app => {
    const quejas = require("../controllers/quejas.controller");
  
    var router = require("express").Router();
      
    router.post("/", quejas.create);  
    router.get("/", quejas.findAll);
    router.get("/:id", quejas.findOne);
    router.get("/regiones/:id", quejas.findOneRegion);
    router.get("/departamentos/:id", quejas.findOneDepartamento);
    router.get("/municipios/:id", quejas.findOneMunicipio);
    router.get("/comercios/:id", quejas.findOneComercios);
    router.get("/sucursales/:id", quejas.findOneSucursales);
    router.put("/:id", quejas.update);
    router.delete("/:id", quejas.delete);
  
    app.use("/api/quejas", router);
  };