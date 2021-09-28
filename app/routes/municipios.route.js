module.exports = app => {
    const municipios = require("../controllers/municipios.controller.js");
  
    var router = require("express").Router();
      
    router.post("/", municipios.create);  
    router.get("/", municipios.findAll);
    router.get("/:id", municipios.findOne);
    router.get("/departamentos/:id", municipios.findOneDepartamento);
    router.put("/:id", municipios.update);
    router.delete("/:id", municipios.delete);
  
    app.use("/api/municipios", router);
  };