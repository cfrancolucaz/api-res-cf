module.exports = app => {
    const comercios = require("../controllers/comercios.controller.js");
  
    var router = require("express").Router();
      
    router.post("/", comercios.create);  
    router.get("/", comercios.findAll);
    router.get("/:id", comercios.findOne);
    router.get("/municipios/:id", comercios.findOneMunicipio);
    router.put("/:id", comercios.update);
    router.delete("/:id", comercios.delete);
  
    app.use("/api/comercios", router);
  };